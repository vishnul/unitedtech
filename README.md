# United Technologies website

Production-oriented company website for United Technologies in Frisco, Texas. It describes staffing, independent talent, custom software development, and software tools, with customer-support and commercial-policy pages intended to support a payment-provider business review.

## Important: complete before public launch

The site intentionally contains bracketed placeholders rather than invented business facts. Search the project for `[` and complete every owner-action item with information that exactly matches official business records and the payment account:

- verified legal business name and entity type;
- physical business street address (not a PO box for Stripe's US verification);
- domain-based, actively monitored support email;
- business phone, or remove the phone field;
- support hours, time zone, and a response-time commitment the business can meet;
- final legal review of the policies for the actual entity and operating model.

Do not submit the site for merchant review while placeholders remain.

## Local development

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by the development server.

## Quality checks

```bash
npm run build
npm run lint
```

## Deployment

This project uses the Sites-compatible Vinext/Vite build and can be deployed with Sites. It can also be connected to a GitHub repository for normal version control. For another provider, confirm that its runtime supports the generated server output before relying on it; this project is not a plain static export.

## Stripe-readiness checklist

Official Stripe guidance can change, so re-check the linked sources before account submission.

- [ ] Website loads publicly without a password or regional block.
- [ ] Business name, service descriptions, location, and all claims match the Stripe account and official records.
- [ ] Every service that may be charged is clearly described.
- [ ] Quote-based pricing process is clear; every payer receives written price, currency, scope, timing, payment schedule, and material terms before payment.
- [ ] Contact page has a verified support channel, physical address, and realistic support response expectation.
- [ ] Refund and dispute policy is published and easy to reach.
- [ ] Cancellation policy is published where applicable.
- [ ] Service delivery/fulfillment timing and process are published.
- [ ] Terms and Privacy Policy are published and reviewed for the actual business.
- [ ] No incomplete “coming soon” product can accept payment.
- [ ] No invented testimonials, customer counts, credentials, guarantees, affiliations, or legal identifiers appear.
- [ ] Domain ownership can be demonstrated; use a matching domain email if possible.
- [ ] The Stripe business URL is the final public domain and remains maintained.
- [ ] Statement descriptor, receipts, support details, and business profile are configured consistently in Stripe.
- [ ] Business and services are checked against Stripe's current restricted-business rules.
- [ ] Contracts, invoices, and fulfillment evidence are retained for account review or disputes.

Official references:

- [Stripe business website for account activation FAQ](https://support.stripe.com/questions/business-website-for-account-activation-faq)
- [Stripe website ownership verification](https://support.stripe.com/express/questions/website-ownership-verification-during-stripe-account-application)
- [Requirements for a US Stripe account](https://support.stripe.com/questions/requirements-for-having-a-us-stripe-account)
- [Stripe prohibited and restricted businesses](https://stripe.com/legal/restricted-businesses)
- [Stripe Services Agreement](https://stripe.com/legal/ssa)

This repository is a website implementation, not legal advice or a guarantee of Stripe approval. Stripe independently reviews each account and may request additional information.

