import './Languages.css'

const languages = [
  { name: 'Arabe', level: 'Langue maternelle', pct: 100 },
  { name: 'Français', level: 'Bilingue', pct: 95 },
  { name: 'Anglais', level: 'Courant', pct: 80 },
]

export default function Languages() {
  return (
    <div className="section-card">
      <h2 className="section-title">Langues</h2>
      <div className="lang-list">
        {languages.map((lang, i) => (
          <div key={i} className="lang-item">
            <div className="lang-header">
              <span className="lang-name">{lang.name}</span>
              <span className="lang-level">{lang.level}</span>
            </div>
            <div className="lang-bar">
              <div className="lang-bar-fill" style={{ width: `${lang.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
