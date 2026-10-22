# Business Card

A digital business card for Brian Rolbiecki Jr, styled after the business card scene in *American Psycho*. You can flip the card over, swap between four card stocks, and watch it tilt and catch the light as the pointer moves.

It's plain HTML, CSS, and JavaScript, with no build step and no dependencies.

<img width="2560" height="1281" alt="image" src="https://github.com/user-attachments/assets/ad4026cf-ad10-4273-aa0e-cc629aab616e" />


## Features

- **Flip:** click the card or the "Turn it over" button to see the back, which links to email, GitHub, and LinkedIn. Clicking a link doesn't flip the card.
- **Card stocks:** choose Bone, Eggshell, Pale Nimbus, or Watermark. Each one changes the card's color and shows its own line from the film. Watermark also shows a faint monogram on the front.
- **Tilt and sheen:** the card tilts in 3D and a highlight follows the pointer. This is turned off when the system asks for reduced motion (`prefers-reduced-motion`).
- **Logo fallback:** if `images/logo.png` is missing or fails to load, a "BR" monogram appears in its place.
- **Accessibility:** both faces have ARIA labels, the flip button reports its state with `aria-pressed`, and the stock picker is a `fieldset` of radio buttons you can use with a keyboard.

## Project structure

```text
index.html   Markup for the front and back of the card, the flip button, and the stock picker
style.css    Layout, card stock colors, the 3D flip, the sheen, and reduced-motion overrides
main.js      Flip toggle, stock switching, pointer tilt, and the logo fallback
images/      (optional) logo.png for the firm logo
```

## Running locally

This project uses the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for VS Code.

1. Install **Live Server** (by Ritwick Dey) from the Extensions view.
2. Open the project folder in VS Code.
3. Right-click `index.html` and choose **Open with Live Server**, or click **Go Live** in the status bar.

The card opens at `http://127.0.0.1:5500` and the page reloads whenever you save a file.

## Customizing

- **Contact details:** edit the name, title, department, phone number, address, and the links on the back in `index.html`.
- **Logo:** put a `logo.png` in an `images/` folder. Until you do, the monogram is shown.
- **Card stocks:** colors are set per stock with `body[data-stock='…']` rules in `style.css`. The quote for each stock is in the `lines` object in `main.js`. To add a stock, add a radio input in `index.html`, a matching CSS rule, and a line in `main.js`.
- **Fonts:** Cormorant Garamond and Cormorant SC, loaded from Google Fonts.

## Deployment

Because the site is static, it can be hosted anywhere that serves files, such as GitHub Pages, Netlify, or Vercel. For GitHub Pages, push to `main` and turn on Pages for the repository root.
