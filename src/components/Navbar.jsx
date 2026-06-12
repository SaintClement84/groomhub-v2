import { useMemo } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { isLoggedIn, logoutUser } from '../lib/auth'

export default function Navbar() {
  const navigate = useNavigate()

  const loggedIn = useMemo(() => isLoggedIn(), [])

  return (
    <header className="navbar" aria-label="Primary navigation">
      <NavLink to="/" className="navbar__brand">
        GroomHub
      </NavLink>

      <nav className="navbar__links">
        <NavLink to="/dashboard" className="navbar__link">
          Dashboard
        </NavLink>
        <NavLink to="/bookings" className="navbar__link">
          Bookings
        </NavLink>
        <NavLink to="/tracker" className="navbar__link">
          Tracker
        </NavLink>
        <NavLink to="/lookbook" className="navbar__link">
          Lookbook
        </NavLink>
        <NavLink to="/social" className="navbar__link">
          Social
        </NavLink>
        <NavLink to="/marketplace" className="navbar__link">
          Marketplace
        </NavLink>

        {!loggedIn ? (
          <>
            <NavLink to="/signup" className="navbar__link">
              Sign Up
            </NavLink>
            <NavLink to="/login" className="navbar__link">
              Login
            </NavLink>
          </>
        ) : (
          <button
            type="button"
            className="navbar__link"
            style={{ cursor: 'pointer', background: 'transparent', border: 0 }}
            onClick={() => {
              logoutUser()
              navigate('/')
            }}
          >
            Log Out
          </button>
        )}
      </nav>
    </header>
  )
}


