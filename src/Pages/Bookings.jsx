import { bookingsData } from '../data/bookingsData'

export default function Bookings() {
  return (
    <div style={{ padding: 24, textAlign: 'left' }}>
      <h1 style={{ marginTop: 8 }}>Bookings</h1>
      <p style={{ marginBottom: 18, marginTop: 0, opacity: 0.95 }}>
        Manage upcoming grooming sessions.
      </p>

      <section>
        <h2 style={{ margin: 0, fontSize: 20 }}>Upcoming</h2>
        <div style={{ display: 'grid', gap: 12, marginTop: 14 }}>
          {bookingsData.upcoming.map((b) => (
            <div
              key={b.id}
              style={{
                border: '1px solid var(--border)',
                borderRadius: 14,
                padding: 16,
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: 12,
                alignItems: 'start',
              }}
            >
              <div>
                <h2 style={{ margin: 0, fontSize: 18 }}>{b.title}</h2>
                <p style={{ marginTop: 8, marginBottom: 0, opacity: 0.92 }}>{b.location}</p>
                <p style={{ marginTop: 6, marginBottom: 0, opacity: 0.8, fontSize: 14 }}>{b.meta}</p>
                <p style={{ marginTop: 6, marginBottom: 0, opacity: 0.75, fontSize: 13 }}>
                  Status: <strong style={{ color: 'var(--text-h)' }}>{b.status}</strong>
                </p>
              </div>
              <div style={{ display: 'flex', gap: 10, flexDirection: 'column', alignItems: 'flex-end' }}>
                <button
                  style={{
                    borderRadius: 10,
                    border: '1px solid var(--border)',
                    padding: '8px 12px',
                    background: 'transparent',
                    cursor: 'pointer',
                  }}
                >
                  Reschedule
                </button>
                <button
                  style={{
                    borderRadius: 10,
                    border: '1px solid var(--accent-border)',
                    padding: '8px 12px',
                    background: 'rgba(170, 59, 255, 0.08)',
                    cursor: 'pointer',
                  }}
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 18, borderTop: '1px solid var(--border)', paddingTop: 18 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>History</h2>
        <div style={{ display: 'grid', gap: 12, marginTop: 14 }}>
          {bookingsData.history.map((b) => (
            <div
              key={b.id}
              style={{
                border: '1px solid var(--border)',
                borderRadius: 14,
                padding: 16,
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: 12,
                alignItems: 'start',
              }}
            >
              <div>
                <h2 style={{ margin: 0, fontSize: 18 }}>{b.title}</h2>
                <p style={{ marginTop: 6, marginBottom: 0, opacity: 0.85, fontSize: 14 }}>{b.location}</p>
                <p style={{ marginTop: 6, marginBottom: 0, opacity: 0.75, fontSize: 13 }}>{b.meta}</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <span style={{ fontWeight: 800, color: 'var(--accent)' }}>{b.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

