const assert = require('node:assert/strict');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');
const root = path.resolve(__dirname, '..');
const errors = [];
const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  const target = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
  if (!target.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
  fs.readFile(target, (err, data) => {
    if (err) { res.writeHead(404).end(); return; }
    const types = { '.html':'text/html', '.js':'text/javascript', '.json':'application/json', '.pdf':'application/pdf', '.jpg':'image/jpeg', '.svg':'image/svg+xml' };
    res.setHeader('Content-Type', types[path.extname(target)] || 'application/octet-stream');
    res.end(data);
  });
});
async function run() {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ headless:true, channel:'chrome' });
  try {
    const context = await browser.newContext({ viewport:{ width:390,height:844 } });
    const page = await context.newPage();
    page.on('pageerror', e => errors.push(e.message));
    page.on('console', msg => { if(msg.type()==='error')errors.push(msg.text()); });
    await page.goto(base + '/#calculatorTool');
    await page.locator('#bf').fill('10000');
    await page.locator('#wainscoting').fill('3000');
    await page.locator('#doors').fill('1900');
    await page.locator('#labor').fill('2315');
    await page.locator('#permits').fill('450');
    await page.locator('#pricingModelSelect').selectOption('panelCumulative-pricing-model-cumulative-cash-23');
    const cash = page.locator('[data-scenario-key="cumulative-cash-23"]');
    await cash.getByRole('button',{name:'Show Commission',exact:true}).click();
    assert.match(await cash.innerText(), /\$14,915\.00/);
    assert.match(await cash.innerText(), /\$614\.77 @ 5\.00%/);
    await page.locator('#bf').fill('11000');
    await page.waitForTimeout(100);
    assert.equal(await cash.getByRole('button',{name:'Hide Commission',exact:true}).count(),1);
    await page.locator('#bf').fill('10000');
    await page.locator('#pricingModelSelect').selectOption('panelOther-pricing-model-doors-cash-23');
    const door = page.locator('[data-scenario-key="doors-cash-23"]');
    await door.getByRole('button',{name:'Show Commission',exact:true}).click();
    assert.match(await door.innerText(),/\$80\.75 @ 5\.00%/);
    await page.locator('#pricingModelSelect').selectOption('panelCumulative-pricing-model-cumulative-finance-18');
    const finance = page.locator('[data-scenario-key="cumulative-finance-18"]');
    await finance.getByRole('button',{name:'Show Commission',exact:true}).click();
    assert.equal(await finance.locator('.metrics').getByText('Commission Earned',{exact:true}).count(),0);
    assert.match(await finance.innerText(), /Plan 965/);
    assert.doesNotMatch(await finance.innerText(), /Plan 925/);
    await page.locator('#internalToggleButton').click();
    await page.locator('#commissionDepositMethod').selectOption('credit-card');
    assert.doesNotMatch(await finance.innerText(), /Plan 924/);
    assert.match(await finance.innerText(), /23\.85%/);
    await page.locator('#pricingModelSelect').selectOption('panelContract-pricing-model-bf-960');
    assert.match(await page.locator('[data-scenario-key="bf-960"]').innerText(), /\$10,000\.00/);
    assert.doesNotMatch(await page.locator('#calculatorTool').textContent(), /NaN|undefined|Infinity/);

    await page.getByRole('link',{name:'Pricing Guide',exact:true}).click();
    await page.locator('#guideSearch').fill('jackhammer');
    assert.equal(await page.locator('#pricingGuideList .guide-row').count(),2);
    await page.locator('#matrixGroup').selectOption('Lucca');
    assert.equal(await page.locator('#pricingMatrixList .guide-row').count(),2);
    await page.getByRole('link',{name:'Quote Builder',exact:true}).click();
    await page.getByRole('button',{name:'One-piece fiberglass unit',exact:true}).click();
    assert.equal(await page.locator('[data-condition-group="wallCondition"] .active').innerText(),'Fiberglass walls');
    assert.equal(await page.locator('[data-condition-group="route"] [data-value="tub-liner"]').isDisabled(),true);
    await page.locator('#roughNextStepButton').click();
    await page.locator('#roughWallPattern').selectOption('Sorrento');
    assert.equal(await page.locator('#roughWallProduct option').count(),3);
    await page.locator('#roughWainscotingProduct').selectOption('wainscot-beadboard');
    await page.locator('#roughWainscotingQuantity').fill('3');
    await page.locator('[data-rough-accessory="oxford-caddy-double"]').check();
    await page.locator('[data-rough-accessory-quantity="oxford-caddy-double"]').fill('2');
    await page.locator('#roughNextStepButton').click();
    await page.locator('#roughNextStepButton').click();
    const quoteTotals = await page.evaluate(()=>getRoughContractTotals(buildRoughEstimateItems()));
    await page.locator('#loadRoughEstimateButton').click();
    const transferred = await page.evaluate(()=>readInputs());
    for(const bucket of ['bf','wainscoting','doors','labor','permits'])assert.equal(transferred[bucket],quoteTotals[bucket]);
    assert.equal(await page.locator('#panelCumulative').isVisible(),true);

    const sizes=[{width:320,height:740},{width:390,height:844},{width:768,height:1024},{width:1280,height:800}];
    const report=[];
    for (const size of sizes) {
      await page.setViewportSize(size);
      for(const tool of ['calculatorTool','pricingGuide','roughEstimator','trainingResources']) {
        await page.locator(`.hero-badge[data-open-tool="${tool}"]`).click();
        const layout=await page.evaluate(id=>({id,width:innerWidth,overflow:document.documentElement.scrollWidth>innerWidth,visible:!document.getElementById(id).hidden}),tool);
        assert.equal(layout.overflow,false,`${tool} overflow at ${size.width}`);
        assert.equal(layout.visible,true);
        report.push(layout);
      }
    }
    assert.equal(await page.locator('.training-module').count(),7);
    const module = page.locator('.training-module').filter({has:page.locator('summary strong',{hasText:'Understanding Your Measurement Sheet'})}).first();
    await module.locator(':scope > summary').click();
    const lesson=module.locator('.training-section').filter({has:page.locator('summary strong',{hasText:'Lesson 2: Tub Liner Measuring Lab'})});
    await lesson.locator(':scope > summary').click();
    assert.equal(await lesson.locator('.training-subsection').count(),16);
    await page.setViewportSize({width:390,height:844});
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
    assert.equal((await page.request.get(base+'/measuring-help-sheet.pdf')).status(),200);
    const screenshot=path.resolve(root,'..','calculator-audit-3.41.png');
    await page.locator('.hero-badge[data-open-tool="calculatorTool"]').click();
    await page.locator('#pricingModelSelect').selectOption('panelCumulative-pricing-model-cumulative-cash-23');
    await page.screenshot({path:screenshot});
    assert.deepEqual(errors,[],'No browser script errors');
    console.log(JSON.stringify({result:'PASS',responsiveViews:report.length,errors,screenshot},null,2));
  } finally { await browser.close(); }
}
run().catch(e=>{console.error(e);process.exitCode=1;}).finally(()=>server.close());
