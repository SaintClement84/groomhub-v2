import { socialData } from '../data/socialData'

export default function Social() {
  return (
    <div style={{ padding: 24, textAlign: 'left' }}>
      <h1 style={{ marginTop: 8 }}>Social</h1>
      <p style={{ marginBottom: 18, marginTop: 0, opacity: 0.95 }}>
        Share your look and get inspiration from others.
      </p>

      <div style={{ display: 'grid', gap: 12 }}>
        {socialData.posts.map((p) => (
          <div
            key={p.id}
            style={{
              border: '1px solid var(--border)',
              borderRadius: 14,
              padding: 16,
              background: 'rgba(170, 59, 255, 0.03)',
            }}
          >
            <h2 style={{ margin: 0, fontSize: 18 }}>{p.author}</h2>
            <p style={{ marginTop: 8, marginBottom: 0, opacity: 0.92 }}>{p.content}</p>
            <p style={{ marginTop: 10, marginBottom: 0, opacity: 0.75, fontSize: 13 }}>
              {p.meta} • {p.likes} likes
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 12, flexWrap: 'wrap' }}>
              <button
                style={{
                  borderRadius: 10,
                  border: '1px solid var(--border)',
                  padding: '8px 12px',
                  background: 'transparent',
                  cursor: 'pointer',
                }}
              >
                Like
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
                Comment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

