import './Education.css'

const education = [
  {
    degree: "Diplôme d'ingénierie d'État en Informatique et Réseaux — Option MIAGE",
    school: 'École Marocaine des Sciences de l\'Ingénieur',
    location: 'Rabat, Maroc',
    period: 'Oct. 2020 – Juin 2025',
  },
  {
    degree: 'Baccalauréat en Sciences Physiques',
    school: 'Lycée Palmerie',
    location: 'Kenitra, Maroc',
    period: '2019 – 2020',
  },
]

export default function Education() {
  return (
    <div className="section-card">
      <h2 className="section-title">Formation</h2>
      <div className="edu-list">
        {education.map((edu, i) => (
          <div key={i} className="edu-item">
            <div className="edu-icon">🎓</div>
            <div>
              <p className="edu-degree">{edu.degree}</p>
              <p className="edu-school">{edu.school}</p>
              <p className="edu-meta">{edu.location} · {edu.period}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
