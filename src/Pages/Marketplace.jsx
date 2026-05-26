import { marketplaceData } from '../data/marketplaceData'

export default function Marketplace() {
  return (
    <div style={{ padding: 24, textAlign: 'left' }}>
      <h1 style={{ marginTop: 8 }}>Marketplace</h1>
      <p style={{ marginBottom: 18, marginTop: 0, opacity: 0.95 }}>
        Tools and products for a sharper routine.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 14,
        }}
      >
        {marketplaceData.products.map((it) => (
          <div
            key={it.id}
            style={{ border: '1px solid var(--border)', borderRadius: 14, padding: 16 }}
          >
            <h2 style={{ margin: 0, fontSize: 18 }}>{it.name}</h2>
            <p style={{ marginTop: 10, opacity: 0.92 }}>{it.desc}</p>
            <div style={{ display: 'flex', gap: 10, marginTop: 12, alignItems: 'center' }}>
              <span style={{ fontWeight: 800, color: 'var(--text-h)' }}>{it.price}</span>
              <button
                style={{
                  marginLeft: 'auto',
                  borderRadius: 10,
                  border: '1px solid var(--accent-border)',
                  padding: '8px 12px',
                  background: 'rgba(170, 59, 255, 0.08)',
                  cursor: 'pointer',
                }}
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

