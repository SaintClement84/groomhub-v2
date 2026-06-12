import '../styles/home-lux.css'

export default function Home() {
  return (
    <div className="home-lux">
      <section className="hero" aria-label="Hero">
        <div className="hero-left">
          <span style={{ display: 'inline-block', marginBottom: 16, color: '#D4AF37' }}>
            Grooming, simplified
          </span>

          <h1>
            Look sharp.
            <br /> Feel confident.
          </h1>

          <p>
            Book your next session, track appointments, and manage your grooming journey in one place.
          </p>

          <div className="hero-buttons">
            <a className="primary-btn" href="/signup">
              Sign Up
            </a>
            <a className="secondary-btn" href="/login">
              Login
            </a>
          </div>


        </div>

        <div className="hero-right" aria-hidden="true">
          <div className="hero-card">
            <div className="status-pill">Luxury black + gold UI</div>
            <h3>Your routine, upgraded</h3>
            <p>
              Smart bookings, easy tracking, and a clean dashboard—built for fast confidence.
            </p>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <span
                style={{
                  border: '1px solid #2a2a2a',
                  borderRadius: 999,
                  padding: '10px 14px',
                  color: '#D4AF37',
                  fontSize: 13,
                  background: '#0f0f0f',
                }}
              >
                Book
              </span>
              <span
                style={{
                  border: '1px solid #2a2a2a',
                  borderRadius: 999,
                  padding: '10px 14px',
                  color: '#D4AF37',
                  fontSize: 13,
                  background: '#0f0f0f',
                }}
              >
                Track
              </span>
              <span
                style={{
                  border: '1px solid #2a2a2a',
                  borderRadius: 999,
                  padding: '10px 14px',
                  color: '#D4AF37',
                  fontSize: 13,
                  background: '#0f0f0f',
                }}
              >
                Manage
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

