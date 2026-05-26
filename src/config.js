import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

// Basic guard: Vite will inline undefined values if env vars are missing.
// Fail fast to make misconfiguration obvious during development.
const missing = Object.entries(firebaseConfig)
  .filter(([, v]) => !v)
  .map(([k]) => k)

if (missing.length) {
  // eslint-disable-next-line no-console
  console.warn(
    '[Firebase] Missing environment variables:',
    missing.join(', '),
    '\nSet these in a .env (Vite) file as VITE_FIREBASE_* values.',
  )
}


const app = initializeApp(firebaseConfig)

export default app

