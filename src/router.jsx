import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'

import Home from './Pages/Home'

import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Bookings from './pages/Bookings'
import Tracker from './pages/Tracker'
import Lookbook from './pages/Lookbook'
import Social from './pages/Social'
import Marketplace from './pages/Marketplace'


export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/bookings" element={<Bookings />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/social" element={<Social />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Route>
    </Routes>
  )
}

