const fs = require('fs')
const path = require('path')

const distDir = path.resolve(__dirname, '..', 'dist')
const indexHtmlPath = path.join(distDir, 'index.html')
const notFoundHtmlPath = path.join(distDir, '404.html')

if (!fs.existsSync(indexHtmlPath)) {
  console.warn('[spa-fallback] dist/index.html not found; skipping')
  process.exit(0)
}

const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8')

// GitHub Pages (and some static hosts) will serve 404.html for unknown
// routes. Make it identical to index.html so SPA routing works.
fs.writeFileSync(notFoundHtmlPath, indexHtml)

console.log('[spa-fallback] Wrote dist/404.html from dist/index.html')

