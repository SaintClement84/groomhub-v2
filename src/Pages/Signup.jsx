import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { isLoggedIn, registerUser, logoutUser } from '../lib/auth'


function Field({
  label,
  optional,
  type = 'text',
  value,
  onChange,
  placeholder,
  autoComplete,
}) {
  return (
    <label className="auth__field">
      <span className="auth__label">
        {label}
        {optional ? <span className="auth__optional"> (optional)</span> : null}
      </span>
      <input
        className="auth__input"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    </label>
  )
}

export default function Signup() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [institution, setInstitution] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const [tab, setTab] = useState('register')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const errors = useMemo(() => {
    const e = []

    if (!name.trim()) e.push('Name is required.')
    if (!contactNumber.trim()) e.push('Contact number is required.')
    if (!institution.trim()) e.push('Institution is required.')

    const emailTrim = email.trim()
    if (!emailTrim) e.push('Email is required.')
    if (emailTrim && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrim)) {
      e.push('Email format is invalid.')
    }

    if (!password) e.push('Password is required.')
    if (password && password.length < 6) e.push('Password must be at least 6 characters.')

    if (!passwordConfirmation) e.push('Password confirmation is required.')
    if (password && passwordConfirmation && password !== passwordConfirmation) {
      e.push('Passwords do not match.')
    }

    return e
  }, [name, contactNumber, institution, email, password, passwordConfirmation])

  async function onSubmit(e) {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (errors.length) {
      setError(errors[0])
      return
    }

    const res = await registerUser({
      name,
      surname,
      contactNumber,
      institution,
      email,
      password,
    })

    if (!res.ok) {
      setError(res.error || 'Registration failed.')
      return
    }

    setSuccess('Registered successfully. You can log in now.')
    setTimeout(() => navigate('/login'), 600)

  }

  return (
    <div className="auth">
      <div className="auth__panel">
        <div className="auth__tabs" role="tablist" aria-label="Authentication tabs">
          {isLoggedIn() ? (
            <button
              type="button"
              className={`auth__tab is-active`}
              onClick={() => navigate('/bookings')}
            >
              Book a Service
            </button>
          ) : (
            <button
              type="button"
              className={`auth__tab ${tab === 'register' ? 'is-active' : ''}`}
              onClick={() => setTab('register')}
            >
              Register
            </button>
          )}

          <button
            type="button"
            className={`auth__tab is-active`}
            onClick={() => {
              if (isLoggedIn()) {
                logoutUser()
                navigate('/')
              } else {
                navigate('/login')
              }
            }}
          >
            {isLoggedIn() ? 'Log Out' : 'Login'}
          </button>
        </div>


        <h1 className="auth__title">Create your account</h1>
        <p className="auth__subtitle">Luxury black + gold registration form.</p>

        {error ? <div className="auth__message auth__message--error">{error}</div> : null}
        {success ? <div className="auth__message auth__message--success">{success}</div> : null}

        <form className="auth__form" onSubmit={onSubmit}>
          <Field label="Name" value={name} onChange={setName} autoComplete="name" />
          <Field
            label="Surname"
            optional
            value={surname}
            onChange={setSurname}
            placeholder="Optional"
            autoComplete="family-name"
          />
          <Field
            label="Contact number"
            value={contactNumber}
            onChange={setContactNumber}
            placeholder="e.g. 0712345678"
            autoComplete="tel"
          />
          <Field
            label="Institution"
            value={institution}
            onChange={setInstitution}
            placeholder="e.g. GroomHub School"
            autoComplete="organization"
          />
          <Field
            label="Email"
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="you@example.com"
            autoComplete="email"
          />
          <Field
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="Minimum 6 characters"
            autoComplete="new-password"
          />
          <Field
            label="Password confirmation"
            type="password"
            value={passwordConfirmation}
            onChange={setPasswordConfirmation}
            placeholder="Re-enter password"
            autoComplete="new-password"
          />

          <button type="submit" className="auth__submit" disabled={!!errors.length && !success}>
            Register
          </button>

          <button
            type="button"
            className="auth__link"
            onClick={() => navigate('/login')}
          >
            Already have an account? Login
          </button>
        </form>
      </div>
    </div>
  )
}

