/* All calculator tabs project these shared job scenarios; money is integer cents. */
function buildJobScenarios(inputs) {
  const primaryBucket = ["bf", "wainscoting", "doors", "labor"].find(key => inputs[key] > 0);
  const hasDiscountable = Boolean(inputs.bf || inputs.wainscoting);
  const definitions = [{ id: "base", title: "No Discount", group: "cash", percent: 0 }];
  if (inputs.bf) definitions.push({ id: "coupon", title: "Coupon Discount", group: "cash", coupon: true, percent: 0 });
  if (hasDiscountable) {
    DISCOUNT_LEVELS.forEach(percent => definitions.push({ id: `cash-${percent}`, title: `${percent}% Discount`, group: "cash", percent }));
    definitions.push({ id: "special", title: "25% Special Discount", group: "special", percent: 25 });
  }
  if (primaryBucket) {
    (hasDiscountable ? FINANCE_DISCOUNT_LEVELS : [0]).forEach(percent => definitions.push({ id: `finance-${percent}`, title: `${percent}% Financing`, group: "finance", percent }));
    definitions.push({ id: "960", title: "Plan 960 - $0 Discount Financing", group: "960", percent: 0 });
  }
  if (!primaryBucket && !inputs.permits) return [];

  return definitions.map(definition => {
    const financed = definition.group === "finance" || definition.group === "960";
    const rows = inputIds.filter(key => inputs[key] > 0).map(bucket => {
      const subtotalCents = inputs[bucket];
      const percent = bucket === "bf" ? definition.percent : bucket === "wainscoting" ? getWainscotingDiscountPercent(definition.percent) : 0;
      const discount = definition.coupon && bucket === "bf"
        ? createFlatDiscount(subtotalCents, 900)
        : findCleanDiscount(subtotalCents, percent);
      const totalCents = discount.finalCents;
      const depositCents = bucket === "permits" ? totalCents : financed ? calculateFinanceDeposit(totalCents) : calculateCashDeposit(totalCents);
      return { bucket, subtotalCents, discountCents: discount.discountCents, totalCents, depositCents, balanceCents: totalCents - depositCents };
    });
    const primary = rows.find(row => row.bucket === primaryBucket);
    const primaryRate = primary ? buildPrimaryCashRateContext(primary.subtotalCents, primary.totalCents, primary.discountCents) : null;
    const cashRate = primaryRate ? calculateCommissionFromRateContext(primaryRate, primary.totalCents).commissionRate : 0;
    rows.forEach(row => {
      row.commissionRate = row.bucket === "permits" ? 0 : cashRate;
      row.commissionCents = commissionForNet(row.totalCents, row.commissionRate);
    });
    const tierPercent = primaryBucket === "bf" ? definition.percent : primaryBucket === "wainscoting" ? getWainscotingDiscountPercent(definition.percent) : 0;
    const planIds = definition.group === "960" ? [PLAN_960_ID] : FEATURED_FINANCE_PLAN_IDS;
    const plans = financed ? planIds.map(id => SYNCHRONY_PLANS.find(plan => plan.id === id)).filter(Boolean).map(plan => {
      const transactionCostPercent = buildTransactionCostPercent(tierPercent, plan.transactionCostPct, getMethodCostPercent(getCommissionDepositMethod()));
      const commissionRate = getCommissionTier(transactionCostPercent).rate;
      return { plan, transactionCostPercent, commissionRate };
    }).filter(result => result.transactionCostPercent <= MAX_FINANCE_TRANSACTION_COST_PERCENT) : [];
    return { ...definition, financed, rows, plans, primaryBucket };
  });
}

function commissionForNet(netCents, rate) {
  return clampCents(netCents * 85 * rate / 10000);
}

function sumScenarioRows(rows, field) {
  return rows.reduce((sum, row) => sum + row[field], 0);
}

function scenarioFinanceItems(scenario, rows) {
  if (!rows.some(row => row.bucket !== "permits" && row.balanceCents > 0)) return [];
  const balanceCents = sumScenarioRows(rows.filter(row => row.bucket !== "permits"), "balanceCents");
  return scenario.plans.map(({ plan, transactionCostPercent, commissionRate }) => {
    const result = calculateSynchronyPlan(balanceCents, plan);
    const merchantCostCents = clampCents(balanceCents * plan.transactionCostPct / 100);
    return {
      label: `Plan ${plan.id} - ${plan.alias}`,
      details: `${plan.kind === "deferred" ? "Payoff target" : "Monthly"}: ${formatCurrency(result.payment)}/mo` +
        ` | ${plan.kind === "deferred" ? plan.months : "Est. " + result.months} months` +
        ` | Merchant cost: ${plan.transactionCostPct.toFixed(2)}% (${formatCurrencyFromCents(merchantCostCents)})` +
        ` | Total cost: ${transactionCostPercent.toFixed(2)}%`,
      commissionRate,
      commissionCents: rows.reduce((sum, row) => sum + (row.bucket === "permits" ? 0 : commissionForNet(row.totalCents, commissionRate)), 0)
    };
  });
}

function scenarioMathLine(rows) {
  const labels = { bf: "BF", wainscoting: "Wainscoting", doors: "Doors", labor: "Labor", permits: "Permit" };
  const parts = rows.map(row => row.bucket === "bf" || row.bucket === "wainscoting"
    ? `${labels[row.bucket]} subtotal ${formatCurrencyFromCents(row.subtotalCents)} - discount ${formatCurrencyFromCents(row.discountCents)} = ${labels[row.bucket]} total ${formatCurrencyFromCents(row.totalCents)}`
    : `${labels[row.bucket]} ${formatCurrencyFromCents(row.totalCents)}`);
  return `${parts.join(" + ")} = ${rows.length > 1 ? "Cumulative total" : "Total"} ${formatCurrencyFromCents(sumScenarioRows(rows, "totalCents"))}`;
}

function jobScenarioCard(scenario, rows, viewKey) {
  const permitsOnly = rows.every(row => row.bucket === "permits");
  const cap = rows.some(row => row.bucket === "wainscoting") && scenario.percent > WAINSCOTING_MAX_DISCOUNT_PERCENT
    ? ` | Wains ${WAINSCOTING_MAX_DISCOUNT_PERCENT}% Cap` : "";
  const badge = permitsOnly ? "Paid in Full | No Financing" : scenario.group === "special"
    ? `Veterans Deals / Managers Specials${cap} | 50% Deposit`
    : scenario.financed ? `${scenario.group === "960" ? "Plan 960 | $0 Discount" : "Finance | " + scenario.percent + "% BF Discount"}${cap} | 30% Deposit`
    : `${scenario.coupon ? "Flat $900 BF Coupon | " : ""}Cash / Check / Charge${cap} | 50% Deposit`;
  return scenarioCardMarkup({
    key: `${viewKey}-${scenario.id}`,
    title: scenario.title,
    badge,
    subtotalCents: sumScenarioRows(rows, "subtotalCents"),
    discountCents: sumScenarioRows(rows, "discountCents"),
    totalCents: sumScenarioRows(rows, "totalCents"),
    depositCents: sumScenarioRows(rows, "depositCents"),
    mathLine: scenarioMathLine(rows),
    commissionCents: scenario.financed && !permitsOnly ? undefined : sumScenarioRows(rows, "commissionCents"),
    commissionRate: permitsOnly ? 0 : rows[0].commissionRate,
    financeItems: scenarioFinanceItems(scenario, rows)
  });
}

function calculatorScenarioGroups(scenarios, bucket, cumulative) {
  const names = {
    cash: "Cash / Check / Charge",
    special: "Veterans / Manager Special",
    finance: "Financing",
    "960": "Plan 960 - $0 Discount"
  };
  return ["cash", "special", "finance", "960"].map(group => {
    const cards = scenarios.filter(scenario => scenario.group === group).map(scenario => {
      const rows = bucket ? scenario.rows.filter(row => row.bucket === bucket) : scenario.rows;
      return rows.length ? jobScenarioCard(scenario, rows, cumulative ? "cumulative" : bucket) : "";
    }).filter(Boolean);
    return cards.length ? sectionMarkup(names[group] + (cumulative ? " Cumulative" : ""), "", cards) : "";
  }).join("");
}

function buildContractTab(inputs) {
  return inputs.bf ? calculatorScenarioGroups(buildJobScenarios(inputs), "bf", false) : emptyState("Enter a BF total to view its contract.");
}

function buildCumulativeTab(inputs) {
  const scenarios = buildJobScenarios(inputs);
  return scenarios.length ? calculatorScenarioGroups(scenarios, null, true) : emptyState("Enter one or more EOI totals to view the cumulative job.");
}

function buildOtherContractsTab(inputs) {
  const scenarios = buildJobScenarios(inputs);
  const sections = ["wainscoting", "doors", "labor", "permits"].filter(bucket => inputs[bucket] > 0).map(bucket => {
    const cards = (bucket === "permits" ? scenarios.slice(0, 1) : scenarios).map(scenario => jobScenarioCard(scenario, scenario.rows.filter(row => row.bucket === bucket), bucket));
    return sectionMarkup(`${BUCKET_LABELS[bucket]} Contract`, "", cards);
  });
  return sections.join("") || emptyState("Enter wainscoting, doors, labor, or permit totals.");
}
