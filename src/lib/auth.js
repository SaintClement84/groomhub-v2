import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'

import db from '../db'

function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase()
}

function normalizePhone(phone) {
  return String(phone || '').replace(/\s+/g, '').trim()
}

// Simple, non-cryptographic hash for demo-only usage.
// If you want proper password security, switch to Firebase Auth.
function cheapHash(str) {
  let h = 0
  const s = String(str)
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i)
    h |= 0
  }
  return `h${Math.abs(h)}`
}

export async function registerUser({
  name,
  surname,
  contactNumber,
  institution,
  email,
  password,
}) {
  const nEmail = normalizeEmail(email)
  const nPhone = normalizePhone(contactNumber)

  // Ensure unique by email
  const q = query(collection(db, 'users'), where('email', '==', nEmail))
  const existing = await getDocs(q)
  if (!existing.empty) {
    return { ok: false, error: 'Email is already registered.' }
  }

  const pwHash = cheapHash(password)

  await addDoc(collection(db, 'users'), {
    name: String(name || '').trim(),
    surname: String(surname || '').trim() || '',
    contactNumber: nPhone,
    institution: String(institution || '').trim(),
    email: nEmail,
    passwordHash: pwHash,
    createdAt: new Date().toISOString(),
  })

  return { ok: true }
}


const SESSION_KEY = 'groomhub_v2_session'

export function isLoggedIn() {
  try {
    return Boolean(window.localStorage.getItem(SESSION_KEY))
  } catch {
    return false
  }
}

export function logoutUser() {
  try {
    window.localStorage.removeItem(SESSION_KEY)
  } catch {
    // ignore
  }
}

function setSession(user) {
  try {
    window.localStorage.setItem(SESSION_KEY, JSON.stringify({
      user: user || null,
      createdAt: new Date().toISOString(),
    }))
  } catch {
    // ignore
  }
}

export async function loginUser({ email, password }) {
  const nEmail = normalizeEmail(email)
  const passwordHash = cheapHash(password)

  const q = query(collection(db, 'users'), where('email', '==', nEmail))
  const snap = await getDocs(q)

  if (snap.empty) return { ok: false, error: 'Invalid email or password.' }

  // We store passwordHash; compare.
  let user = null
  snap.forEach((d) => {
    user = { id: d.id, ...d.data() }
  })

  if (!user || user.passwordHash !== passwordHash) {
    return { ok: false, error: 'Invalid email or password.' }
  }

  // Remove passwordHash from returned data
  // eslint-disable-next-line no-unused-vars
  const { passwordHash: _pwHash, ...rest } = user

  setSession(rest)
  return { ok: true, user: rest }



}


