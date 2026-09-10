const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { JSDOM } = require('jsdom');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const dom = new JSDOM(source, { runScripts: 'outside-only', url: 'https://test.local/', pretendToBeVisual: true });
const win = dom.window;
win.scrollTo = () => {};
win.HTMLElement.prototype.scrollIntoView = () => {};
for (const file of ['price-list-data.js', 'calculator-results.js']) vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), dom.getInternalVMContext());
const main = [...source.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(m => m[1]).find(s => s.includes('const STORAGE_KEY'));
// Export lexical state only into the isolated test DOM.
vm.runInContext(main + '\nwindow.audit = { state, roughState, catalogItems, PRODUCT_MATRICES, DISCOUNT_LEVELS, FINANCE_DISCOUNT_LEVELS };', dom.getInternalVMContext());
const doc = win.document;
let checks = 0;
function check(condition, message) { checks++; assert.ok(condition, message); }
function money(value) { return Math.round(Number(value.replace(/[^0-9.-]/g, '')) * 100); }
function inputs(values) {
  const result = Object.fromEntries(['bf', 'wainscoting', 'doors', 'labor', 'permits'].map(key => [key, values[key] || 0]));
  for (const [key, cents] of Object.entries(result)) doc.getElementById(key).value = cents ? (cents / 100).toFixed(2) : '';
  return result;
}
function tick() { return new Promise(resolve => win.setTimeout(resolve, 0)); }
function byKey(key) { return doc.querySelector(`[data-scenario-key="${key}"]`); }
function cardMetrics(card) {
  return Object.fromEntries([...card.querySelectorAll('.metrics > .metric')].map(el => [el.querySelector('span').textContent.trim(), money(el.querySelector('strong').textContent.split(' @ ')[0])]));
}

async function run() {
  const cases = [
    {}, { bf: 1000000 }, { bf: 881537, wainscoting: 301099, doors: 190000, labor: 231537, permits: 45000 },
    { wainscoting: 300000 }, { doors: 190000, labor: 231500 }, { permits: 45000 },
    { bf: 1, wainscoting: 999, doors: 100, labor: 5, permits: 1 },
    { bf: 89999, wainscoting: 39995 }, { bf: 123456789, labor: 234567 }
  ];
  // All 31 nonempty combinations of EOIs, plus edge amounts above.
  for (let mask = 1; mask < 32; mask++) cases.push(Object.fromEntries(['bf','wainscoting','doors','labor','permits'].map((key, i) => [key, mask & (1 << i) ? [881500,301000,190000,231500,45000][i] : 0])));
  for (const payment of ['cash-check', 'credit-card']) for (const deposit of ['cash-check', 'credit-card']) for (const values of cases) {
    const job = inputs(values);
    doc.getElementById('commissionPaymentMethod').value = payment;
    doc.getElementById('commissionDepositMethod').value = deposit;
    const scenarios = win.buildJobScenarios(job);
    for (const scenario of scenarios) {
      let sum = 0;
      for (const row of scenario.rows) {
        check(row.subtotalCents - row.discountCents === row.totalCents, 'Subtotal minus discount equals total');
        check(row.depositCents >= 0 && row.depositCents <= row.totalCents, 'Deposit must not exceed total');
        check(row.depositCents + row.balanceCents === row.totalCents, 'Deposit plus balance equals total');
        check(Number.isSafeInteger(row.totalCents), 'Integer cents');
        if (row.bucket === 'wainscoting') check(row.discountCents <= Math.floor(row.subtotalCents * 0.15), '15% wains cap');
        if (['doors', 'labor', 'permits'].includes(row.bucket)) check(row.discountCents === 0, 'Nondiscountable EOI');
        if (row.bucket === 'permits') {
          check(row.commissionCents === 0 && row.balanceCents === 0, 'Permit paid in full and excluded from commission');
        } else {
          const primary = scenario.rows.find(r => r.bucket === scenario.primaryBucket);
          check(row.commissionRate === primary.commissionRate, 'Shared cash commission rate');
          check(row.commissionCents === Math.round(row.totalCents * 85 * row.commissionRate / 10000), 'Commission is net x 85% x rate');
        }
        sum += row.totalCents;
      }
      if (scenario.id === '960') check(scenario.rows.every(r => r.discountCents === 0), '960 must have zero discounts');
      for (const p of scenario.plans) {
        const pct = scenario.primaryBucket === 'bf' ? scenario.percent : scenario.primaryBucket === 'wainscoting' ? Math.min(scenario.percent, 15) : 0;
        const expectedCost = Math.round((pct + p.plan.transactionCostPct + (deposit === 'credit-card' ? 2 : 0)) * 100) / 100;
        check(p.transactionCostPercent === expectedCost && expectedCost <= 26, 'Additive financing cost and plan filtering');
        const cumulative = win.scenarioFinanceItems(scenario, scenario.rows).find(x => x.label.startsWith(`Plan ${p.plan.id} -`));
        if (cumulative) {
          const earned = scenario.rows.reduce((n, r) => n + (r.bucket === 'permits' ? 0 : Math.round(r.totalCents * 85 * p.commissionRate / 10000)), 0);
          check(cumulative.commissionCents === earned, 'Cumulative plan commission equals EOI sum');
        }
      }
    }
    if (job.bf) check(scenarios.some(s=>s.id==='coupon'), 'Coupon preserved');
    if (job.bf || job.wainscoting) check(scenarios.filter(s=>s.id.startsWith('cash-')).length === 11, 'Every discount tier preserved');
  }
  const job = inputs({ bf: 1000000, wainscoting: 300000, doors: 190000, labor: 231500, permits: 45000 });
  doc.getElementById('commissionPaymentMethod').value = 'cash-check';
  doc.getElementById('commissionDepositMethod').value = 'cash-check';
  win.render();
  await tick();
  const cash23 = win.buildJobScenarios(job).find(s=>s.id==='cash-23');
  check(cash23.rows.find(r=>r.bucket==='bf').totalCents===770000, '$10,000 less 23% is $7,700');
  check(cash23.rows.find(r=>r.bucket==='wainscoting').totalCents===255000, 'Wains capped at 15%');
  check(cash23.rows.find(r=>r.bucket==='doors').commissionCents===8075, 'Doors $1,900 x 85% x 5% = $80.75');
  const metrics = cardMetrics(byKey('cumulative-cash-23'));
  check(metrics['Final Total'] === 1491500, 'Displayed cumulative total $14,915');
  check(metrics.Deposit === 770000, 'Displayed deposit sums individual rounded deposits plus permit');
  for (const scenario of win.buildJobScenarios(job)) {
    const aggregate = cardMetrics(byKey(`cumulative-${scenario.id}`));
    const individual = ['bf','wainscoting','doors','labor'].map(bucket => cardMetrics(byKey(`${bucket}-${scenario.id}`)));
    individual.push(cardMetrics(byKey('permits-base')));
    for (const field of ['Subtotal','Discount','Final Total','Deposit','Balance Due']) {
      check(aggregate[field] === individual.reduce((sum, row)=>sum+row[field],0), `Rendered tabs reconcile ${scenario.id}: ${field}`);
    }
  }
  const financeCard = byKey('cumulative-finance-18');
  financeCard.querySelector('[data-toggle-commission-card]').click();
  check(!('Commission Earned' in cardMetrics(byKey('cumulative-finance-18'))), 'No fake aggregate $0 on financing cards');
  check(byKey('cumulative-finance-18').textContent.includes('Commission earned:'), 'Actual plan commissions visible');
  byKey('doors-cash-23').querySelector('[data-toggle-commission-card]').click();
  check(cardMetrics(byKey('doors-cash-23'))['Commission Earned']===8075, 'Displayed doors commission follows BF');
  doc.getElementById('bf').value = '11000';
  doc.getElementById('bf').dispatchEvent(new win.Event('input'));
  check(byKey('doors-cash-23').querySelector('button').textContent.trim()==='Hide Commission', 'Visibility survives instant updates');
  const primaryBefore = win.buildPrimaryCashRateContext(1000000, 770000, 230000);
  doc.getElementById('commissionDepositMethod').value='credit-card';
  const primaryAfter = win.buildPrimaryCashRateContext(1000000, 770000, 230000);
  check(primaryBefore.cardCostCents===primaryAfter.cardCostCents,'Financing deposit setting must not affect cash deal');
  inputs({ permits:45000 }); win.render();
  check(byKey('cumulative-base')!==null, 'Permit-only cumulative displays');
  check(doc.getElementById('panelCumulative').querySelectorAll('.finance-item').length===0, 'Permit-only never financed');
  win.clearInputs();
  check(!doc.getElementById('panelCumulative').querySelector('.scenario-card'),'Clear removes results');
  check(doc.querySelectorAll('.training-module').length===7, 'All training modules render');
  doc.getElementById('guideSearch').value='jackhammer'; win.renderPricingGuide();
  check(doc.querySelectorAll('#pricingGuideList .guide-row').length===2, 'Natural pricing search');
  doc.getElementById('matrixSearch').value='savona'; win.renderProductMatrix();
  check(doc.querySelectorAll('#pricingMatrixList .guide-row').length>=2, 'Matrix search');
  for (const [cost, rate] of [[0,9],[12,9],[12.01,8],[15,8],[15.01,7],[20,7],[20.01,5],[25,5],[25.01,0]]) check(win.getCommissionTier(cost).rate===rate, `Commission boundary ${cost}`);
  const ids=win.audit.catalogItems.map(item=>item.id);
  check(new Set(ids).size===ids.length,'Unique price-list IDs');
  for (const item of win.audit.catalogItems) for (const variant of item.variants) check(Number.isFinite(variant.price)&&variant.price>0, `Listed price: ${item.id}/${variant.id}`);
  const builderDefaults=[...doc.querySelectorAll('#roughEstimator input, #roughEstimator select')].map(el=>({el,value:el.value,checked:el.checked}));
  function resetBuilder(fixture='steel-tub', route='tub-liner', wall='staying') {
    for(const saved of builderDefaults) { saved.el.value=saved.value; if(saved.el.type==='checkbox')saved.el.checked=saved.checked; }
    Object.assign(win.audit.roughState,{existingFixture:fixture,route,wallCondition:wall,layout:'standard'});
    win.audit.state.roughRouteLocked=true;
    win.audit.state.roughAddOns=[];
    win.renderRoughControls();
  }
  function lines() { return win.buildRoughEstimateItems(); }
  function lineCount(itemId) { const label=win.getCatalogItemById(itemId).label; return lines().filter(line=>line.label.startsWith(label)); }
  const fixtures=['cast-tub','steel-tub','fiberglass-tub','shower-base','one-piece-fiberglass','bf-liner','bf-system','concrete-tile-base','other'];
  for (const fixture of fixtures) {
    resetBuilder(fixture,'custom');
    const choices=[...doc.getElementById('roughPrimaryProduct').options].map(o=>o.value);
    if(!['cast-tub','steel-tub'].includes(fixture)) check(!choices.includes('tub-liner'), `Custom route cannot bypass liner restriction: ${fixture}`);
    check(!choices.includes('threshold-base-6'),'Custom route cannot bypass molded exception');
    for (const route of [...win.getAllowedRoughRoutes(fixture)]) {
      resetBuilder(fixture,route);
      const snapshot=win.getRoughEngineState();
      const items=lines();
      check(items.every(line=>Number.isSafeInteger(line.totalCents)&&line.totalCents===Math.round(line.unitCents*line.quantity)), `Exact line math: ${fixture}/${route}`);
      check(win.getRoughGroupedTotals(items).total===win.getRoughContractTotals(items).grand, 'Grouped and EOI totals reconcile');
      if(snapshot.primaryProduct) check(lineCount('drain-kit').length===1,'Exactly one drain per unit');
      if(snapshot.wallPrepNeeded) check(lineCount('labor-wall-prep').length===1,'Exactly one wall prep for shared scope');
      if(snapshot.valveEnabled) check(items.some(line=>line.label===win.getCatalogItemById(snapshot.valveProduct)?.label),'Enabled valve contributes a price');
    }
  }
  resetBuilder('one-piece-fiberglass','tub-replacement');
  check(lineCount('labor-remove-fg-1-piece').length===1,'One-piece demo charged once');
  check(lineCount('labor-remove-3pc-wall-system').length===0,'One-piece suppresses separate wall demo');
  check(lineCount('labor-remove-fiberglass-base').length===0,'One-piece suppresses separate base demo');
  resetBuilder('cast-tub','tub-to-shower','tile');
  doc.getElementById('roughTileWallCount').value='2'; win.renderRoughControls();
  check(lineCount('labor-remove-cast-steel-tub').length===1,'Cast removal');
  check(lineCount('labor-remove-tile-wall')[0]?.quantity===2,'Two tile walls');
  check(lineCount('labor-new-sheetrock')[0]?.quantity===2,'Two separate re-rock charges');
  check(!win.getRoughEngineState().relocateDrain,'Drain relocation remains manual');
  resetBuilder('steel-tub','tub-liner','mud');
  doc.getElementById('roughMudWallRemoval').checked=true; win.renderRoughControls();
  check(lineCount('labor-mud-wall-removal').length===1&&lineCount('labor-remove-tile-wall').length===0,'Mud removal excludes tile demo');
  resetBuilder();
  doc.getElementById('roughFormedFront').value='yes';
  doc.getElementById('roughWainscotingProduct').value='wainscot-beadboard';
  doc.getElementById('roughWainscotingQuantity').value='3';
  doc.querySelector('[data-rough-accessory="oxford-caddy-double"]').checked=true;
  doc.querySelector('[data-rough-accessory-quantity="oxford-caddy-double"]').value='2';
  doc.getElementById('roughStraightGrabBarVariant').value=doc.getElementById('roughStraightGrabBarVariant').options[1].value;
  doc.getElementById('roughStraightGrabBarQuantity').value='2';
  win.renderRoughControls();
  check(lineCount('tub-liner-formed-front').length===1,'Formed front added once');
  check(lineCount('wainscot-beadboard')[0]?.quantity===3,'Three wains sheets');
  check(lineCount('oxford-caddy-double')[0]?.quantity===2,'Two double caddies');
  check(lineCount('safety-bar-16')[0]?.quantity===2,'Two grab bars');
  const transfer=win.getRoughContractTotals(lines());
  win.loadRoughEstimateIntoPricing();
  for(const key of ['bf','wainscoting','doors','labor','permits']) check(win.readInputs()[key]===transfer[key], `Quote handoff: ${key}`);
  check(!doc.getElementById('calculatorTool').hidden,'Handoff opens calculator');
  resetBuilder();
  doc.getElementById('roughWallPattern').value='Torino'; win.renderRoughControls();
  check(lineCount('tile-pattern-upcharge').length===0,'Flat Torino has no tile upgrade');
  resetBuilder('concrete-tile-base','shower-base');
  doc.getElementById('roughConcreteBeveled').checked=true;
  win.audit.roughState.route='molded-base'; win.renderRoughControls();
  doc.getElementById('roughPrimaryProduct').value='threshold-base-6';
  doc.getElementById('roughBaseOnlyException').checked=true; win.renderRoughControls();
  check(win.getRoughEngineState().baseOnlyAllowed,'Rare concrete beveled base-only available');
  check(lineCount('labor-jackhammer-tile-base').length===0,'Molded overlay does not automatically demolish its substrate');
  doc.getElementById('roughWallRepairCount').value='1'; win.renderRoughControls();
  check(!win.getRoughEngineState().baseOnlyAllowed&&win.getRoughEngineState().includeWetWalls,'Wall repair blocks base-only');
  console.log(`PASS: ${checks} checks across ${cases.length * 4} job/payment combinations and rendered tabs.`);
}
run().then(()=>win.close()).catch(error=>{ console.error(error); win.close(); process.exitCode=1; });
