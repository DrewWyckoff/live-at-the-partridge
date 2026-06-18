# Live at the Partridge — Coming Soon

A simple, single-page "coming soon" splash. Plain HTML/CSS/JS — no build step,
no dependencies. Host it on any static host (Netlify, Vercel, GitHub Pages, S3).

## Files

| File              | Purpose                                              |
| ----------------- | ---------------------------------------------------- |
| `index.html`      | Page markup                                          |
| `styles.css`      | All styling + animations (color tokens at the top)   |
| `script.js`       | Footer year + email-form handling                    |
| `assets/logo.svg` | **Placeholder** — swap in the client's real SVG here |

## Use the client's SVG

Drop the real logo in as `assets/logo.svg` (keep that filename and it just
works). If the file is named something else, update the `<img src>` in
`index.html`. SVG scales crisply at any size; width is controlled by the
`.logo` rule in `styles.css`.

## Email signup

The form is **UI only** right now — it validates the address and shows a
success message, but doesn't send anywhere. To connect a real mailing list,
see the `TODO` block in `script.js` and point the `fetch()` at your provider
(Mailchimp, ConvertKit, Buttondown, etc.).

## Customizing

- **Colors:** edit the `:root` tokens at the top of `styles.css`.
- **Tagline / copy:** edit the text in `index.html`.
- **Animation:** the background "glow" drift, logo entrance, and breathing
  glow are all in `styles.css`. A `prefers-reduced-motion` rule disables them
  for users who ask for less motion.

## Preview locally

Open `index.html` directly in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```
