# Balcony Netting Showcase

A responsive React website for Siva Enterprises. The frontend is built with React, Vite, and Tailwind CSS. Quote requests are prepared in WhatsApp on the visitor's device.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Local development

Install dependencies and start the frontend:

```sh
npm install
npm run dev
```

Open the Vite URL printed in the terminal. Submitting the quote form opens WhatsApp with a pre-filled message; the visitor must press Send in WhatsApp.

## Production

```sh
npm run build
```

Deploy the generated `dist/` folder to any static hosting provider. No backend or database configuration is required for quote enquiries.

## Project layout

- `src/components/site/` — website sections and interactions
- `src/components/ui/` — shared accessible UI primitives
- `src/assets/` — local website images
- `public/` — static media, favicon, and brand logo
