import { dashboardData } from '../data/dashboardData'

export default function Dashboard() {
  return (
    <div style={{ padding: 24, textAlign: 'left' }}>
      <h1 style={{ marginTop: 8 }}>Dashboard</h1>
      <p style={{ marginBottom: 18 }}>
        Overview of your upcoming sessions and grooming progress.
      </p>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 14,
        }}
      >
        {dashboardData.stats.map((s) => (
          <div
            key={s.label}
            style={{
              border: '1px solid var(--border)',
              borderRadius: 14,
              padding: 16,
            }}
          >
            <h2 style={{ margin: 0, fontSize: 18 }}>{s.label}</h2>
            <p style={{ marginTop: 10, opacity: 0.9, fontWeight: 800 }}>{s.value}</p>
          </div>
        ))}
      </section>

      <section style={{ marginTop: 18, borderTop: '1px solid var(--border)', paddingTop: 18 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Recent activity</h2>
        <div style={{ display: 'grid', gap: 12, marginTop: 14 }}>
          {dashboardData.recentActivity.map((a) => (
            <div
              key={a.id}
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
                <h3 style={{ margin: 0, fontSize: 16 }}>{a.title}</h3>
                <p style={{ marginTop: 6, marginBottom: 0, opacity: 0.85, fontSize: 14 }}>
                  {a.meta}
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
                <button
                  style={{
                    borderRadius: 10,
                    border: '1px solid var(--border)',
                    padding: '8px 12px',
                    background: 'transparent',
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
    </div>
  )
}

