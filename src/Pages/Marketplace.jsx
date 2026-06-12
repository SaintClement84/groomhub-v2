import { useMemo, useState } from 'react'

import { marketplaceData } from '../data/marketplaceData'

export default function Marketplace() {
  const categories = useMemo(() => {
    const set = new Set(marketplaceData.products.map((p) => p.category).filter(Boolean))
    return ['All', ...Array.from(set)]
  }, [])

  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    if (category === 'All') return marketplaceData.products
    return marketplaceData.products.filter((p) => p.category === category)
  }, [category])

  return (
    <div style={{ padding: 24, textAlign: 'left' }}>
      <h1 style={{ marginTop: 8 }}>Marketplace</h1>
      <p style={{ marginBottom: 18, marginTop: 0, opacity: 0.95 }}>
        Tools and products for a sharper routine.
      </p>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 18 }}>
        <label style={{ fontWeight: 800, opacity: 0.92 }}>Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            borderRadius: 12,
            border: `1px solid var(--accent-border)`,
            background: 'var(--bg)',
            padding: '10px 12px',
            color: 'var(--text-h)',
            cursor: 'pointer',
            minWidth: 180,
          }}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>


      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 14,
        }}
      >
        {filtered.map((it) => (
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


