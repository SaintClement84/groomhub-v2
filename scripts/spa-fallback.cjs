const fs = require('fs')
const path = require('path')

const distDir = path.resolve(__dirname, '..', 'dist')

// GitHub Pages (static hosting) doesn't run a server-side SPA fallback.
// We provide a 404.html that routes back to the app so deep links work.
const indexHtmlPath = path.join(distDir, 'index.html')
const notFoundHtmlPath = path.join(distDir, '404.html')

if (!fs.existsSync(distDir)) {
  console.warn('[spa-fallback] dist directory not found, skipping')
  process.exit(0)
}

if (!fs.existsSync(indexHtmlPath)) {
  console.warn('[spa-fallback] dist/index.html not found, skipping')
  process.exit(0)
}

const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8')

// Create 404.html as a copy of index.html.
// React/Vite app bootstraps from /src/main.jsx and handles routing client-side.
fs.writeFileSync(notFoundHtmlPath, indexHtml)

console.log('[spa-fallback] Created dist/404.html for SPA routing fallback')

