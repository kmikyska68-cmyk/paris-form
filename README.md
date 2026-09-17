# Paris Consultation · Pre-Call Form

A single-page form for people who book "The Parisienne Diaries: Paris Trip
Consultation" on Gumroad. Styled to match theparisiennediaries.com (deep
navy background, serif headlines and wordmark, tan CTA).

## Files

- `index.html`: the page and form
- `styles.css`: all styling
- `script.js`: submits the form via fetch and shows an inline "Merci!" confirmation instead of leaving the page

## How submissions work

The form posts to [FormSubmit](https://formsubmit.co): no backend or account
needed, submissions arrive as an email.

**One-time setup:** the first time the form is submitted, FormSubmit will
send an activation email to `theparisiennediariesinfo@gmail.com` asking to
confirm the endpoint. Submit the form once yourself after deploying, then
check that inbox and click the confirmation link. After that, all future
submissions land there automatically.

To change the destination email, edit the `action` attribute on the
`<form>` in `index.html`:

```html
<form action="https://formsubmit.co/ajax/YOUR-EMAIL@example.com" ...>
```

## Deploying

Any static host works. Easiest options:

- **GitHub Pages**: Settings → Pages → deploy from this branch/root.
- **Netlify/Vercel**: drag-and-drop the folder, or connect the repo.

Once deployed, link to the page's URL from:
- The Gumroad product description/"pre-call planning form" link, and/or
- The receipt/thank-you email Gumroad sends after purchase.

## Customizing

- Colors/fonts are CSS variables at the top of `styles.css`.
- Wordmark and headlines both use "Playfair Display"; body/UI text uses "Inter".
