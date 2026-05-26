import { lookbookData } from '../data/lookbookData'

export default function Lookbook() {
  return (
    <div style={{ padding: 24, textAlign: 'left' }}>
      <h1 style={{ marginTop: 8 }}>Lookbook</h1>
      <p style={{ marginBottom: 18, marginTop: 0, opacity: 0.95 }}>
        Browse inspiration for your next appointment.
      </p>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 14 }}>
        {lookbookData.categories.map((c) => (
          <span
            key={c}
            style={{
              border: '1px solid var(--border)',
              borderRadius: 999,
              padding: '8px 12px',
              fontWeight: 800,
              fontSize: 14,
              opacity: 0.92,
            }}
          >
            {c}
          </span>
        ))}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 14,
        }}
      >
        {lookbookData.featured.map((l) => (
          <div
            key={l.id}
            style={{ border: '1px solid var(--border)', borderRadius: 14, padding: 16 }}
          >
            <h2 style={{ margin: 0, fontSize: 18 }}>{l.title}</h2>
            <p style={{ marginTop: 10, opacity: 0.92 }}>{l.meta}</p>
            <button
              style={{
                marginTop: 12,
                borderRadius: 10,
                border: '1px solid var(--border)',
                padding: '8px 12px',
                background: 'transparent',
                cursor: 'pointer',
              }}
            >
              Save
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

