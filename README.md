# Clarity Design System Proof-of-concept

## What's this?

This is a proof-of-concept for integrating design tokens using [Style Dictionary](https://amzn.github.io/style-dictionary/#/) with [Material UI](https://mui.com/material-ui/getting-started/) for use in a potential Nivoda Design System (so-called "Clarity").

## Structure

.
├── src/
│ ├── components/
│ │ ├── tokens.css
│ │ ├── typography.css
│ │ └── theme.tsx
│ └── tokens/
│ ├── \_base.json
│ ├── \_color.json
│ ├── \_components.json
│ └── \_radius.json
└── sd.config.json

- `tokens.css`: This is the output from Style Dictionary's transform process. **This file should never be edited manually**. This file contains design tokens as CSS Variables and is consumed at a global level in the `main.tsx` file.
- `typography.css`: This is a simple import to inject the Inter font on the application. It's imported by the `main.tsx` file.
- `theme.tsx`: This is simply setting Inter as the global font for Material UI's `ThemeProvider`.
- `tokens`: This directory is where the tokens (to be consumed and transformed by Style Dictionary) live. These include, for now, base tokens (raw colours, radii, distances etc.), semantic colours (alert, warning, danger etc.) and component tokens. _Ideally_ this would be in a separate package, so that it can be versioned and consumed by other codebases. We want the tokens to _ideally_ be as decoupled from the rest of the stack as possible. For the purposes of this demonstration, the tokens have been included here. We can discuss later how to better structure this.
- `sd.config.json`: This is Style Dictionary's config file.

## Commands

- `npm run dev` will run `npm run build-tokens` and then run Vite's local dev server.
- `npm run build-tokens` will run Style Dictionary and build `tokens.css`.
