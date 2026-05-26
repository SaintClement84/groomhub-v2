export default function Tracker() {
  const stages = [
    { label: 'Upcoming', detail: 'Next session scheduled.' },
    { label: 'In Progress', detail: 'Track your grooming preferences.' },
    { label: 'Done', detail: 'Review notes and outcomes.' },
  ]

  return (
    <div style={{ padding: 24, textAlign: 'left' }}>
      <h1 style={{ marginTop: 8 }}>Tracker</h1>
      <p style={{ marginBottom: 18, marginTop: 0, opacity: 0.95 }}>
        A simple timeline for your grooming journey.
      </p>

      <div style={{ display: 'grid', gap: 12 }}>
        {stages.map((s, idx) => (
          <div
            key={s.label}
            style={{
              border: '1px solid var(--border)',
              borderRadius: 14,
              padding: 16,
              background: idx === 0 ? 'rgba(170, 59, 255, 0.04)' : 'transparent',
            }}
          >
            <h2 style={{ margin: 0, fontSize: 18 }}>{s.label}</h2>
            <p style={{ marginTop: 8, marginBottom: 0, opacity: 0.92 }}>{s.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

