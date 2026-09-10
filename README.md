# Bath Fitter Sales Team Toolkit

Internal sales-team resource for in-home pricing, quote building, price lookup, measuring guidance, training, financing, and commission review.

## What Is Included

- Calculator Tool for BF system, wainscoting, doors, labor, permit, deposit, financing, cumulative total, and commission views.
- Pricing Guide with searchable product, accessory, labor, door, and matrix references.
- Quote Builder for exact rep-only estimate building from existing conditions and selected scope.
- Training Resources with linear rep training modules, practice scenarios, and the approved measuring guide PDF.

## Hosting

This app is designed for GitHub Pages from the repository root on the `main` branch.

## Install

Open the published app on a phone, tablet, or desktop browser and use `Add to Home Screen` or `Install` when available.

## Notes

Use current branch guidance for final approvals, custom pricing, permit handling, and exceptions that require Erin or owner approval.

## Verification

Run `npm ci`, then `npm test` for calculation, cross-tab reconciliation, catalog, and quote-rule regression checks. Run `npm run test:browser` with Google Chrome installed for interactive checks at phone, tablet, and desktop sizes. Tests use an isolated browser profile and a temporary local server.

`calculator-results.js` builds the shared scenarios displayed by all calculator tabs. Wainscoting is capped at 15%; permits are paid in full and excluded from financing and commission. Commissions are rounded per EOI, then summed for the cumulative display.

Financing commission tiers and the 26% plan filter follow the owner's specified sum of the BF discount percentage, plan transaction percentage, and deposit-method percentage. Cash deals use actual discounted BF pricing and the cash deal payment method. The commission agreement's prose describes dollar-weighted transaction costs, while its example and the owner's instructions use added percentages for financing; the explicit owner instruction is retained.
