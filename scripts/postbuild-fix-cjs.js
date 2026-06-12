/* eslint-env node */
// This script runs in Node after `vite build`.
// The repo uses "type": "module", so we keep this file as CJS (it’s executed via `node scripts/...`).

const fs = require('fs')
const path = require('path')

const distDir = path.resolve(__dirname, '..', 'dist')
const indexHtmlPath = path.join(distDir, 'index.html')
const notFoundHtmlPath = path.join(distDir, '404.html')

if (!fs.existsSync(indexHtmlPath)) {
  console.warn('[postbuild-fix] dist/index.html not found; skipping')
  process.exit(0)
}

const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8')

// Ensure 404.html is exactly the same as index.html.
fs.writeFileSync(notFoundHtmlPath, indexHtml)

// Also ensure GitHub Pages understands routing fallback by providing a 500/404.html
// copy isn’t required, but keeping it consistent.
console.log('[postbuild-fix] Wrote dist/404.html from dist/index.html')


