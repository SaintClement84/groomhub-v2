import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { isLoggedIn, loginUser, logoutUser } from '../lib/auth'

export default function Login() {
  const navigate = useNavigate()


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!email.trim()) {
      setError('Email is required.')
      return
    }
    if (!password) {
      setError('Password is required.')
      return
    }

    const res = await loginUser({ email, password })
    if (!res.ok) {
      setError(res.error || 'Login failed.')
      return
    }

    setSuccess('Logged in successfully.')

    // Redirect to home after signing in.
    setTimeout(() => navigate('/'), 600)

  }


  return (
    <div className="auth">
      <div className="auth__panel">
        <div className="auth__tabs" role="tablist" aria-label="Authentication tabs">
          {isLoggedIn() ? (
            <button
              type="button"
              className={`auth__tab`}
              onClick={() => navigate('/bookings')}
            >
              Book a Service
            </button>
          ) : (
            <button
              type="button"
              className={`auth__tab`}
              onClick={() => navigate('/signup')}
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
              }
            }}
          >
            {isLoggedIn() ? 'Log Out' : 'Login'}
          </button>

        </div>


        <h1 className="auth__title">Welcome back</h1>
        <p className="auth__subtitle">Enter your email and password.</p>

        {error ? <div className="auth__message auth__message--error">{error}</div> : null}
        {success ? <div className="auth__message auth__message--success">{success}</div> : null}

        <form className="auth__form" onSubmit={onSubmit}>
          <label className="auth__field">
            <span className="auth__label">Email</span>
            <input
              className="auth__input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </label>

          <label className="auth__field">
            <span className="auth__label">Password</span>
            <input
              className="auth__input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              autoComplete="current-password"
            />
          </label>

          <button type="submit" className="auth__submit">
            Login
          </button>

          <button
            type="button"
            className="auth__link"
            onClick={() => navigate('/signup')}
          >
            Need an account? Register
          </button>
        </form>
      </div>
    </div>
  )
}

