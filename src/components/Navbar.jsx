import { NavLink } from 'react-router-dom'

export default function Navbar() {
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
      </nav>
    </header>
  )
}

