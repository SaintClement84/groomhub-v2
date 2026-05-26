import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages URL format: https://<owner>.github.io/<repo>/
  // This app uses BrowserRouter, so we must serve under the repo subpath.
  base: '/groomhub-v2/',
  plugins: [react()],
  // Ensure React Router doesn't 404 hard on refresh; Pages serves static files.
  // (We still generate dist/404.html as a fallback.)
})


