import './Certificates.css'

const certs = [
  {
    issuer: 'Coursera',
    items: [
      'Building Scalable Java Microservices with Spring Boot and Spring Cloud — Google Cloud',
      'Système d\'exploitation UNIX',
      'Oracle Database Certification',
      'DevOps, Cloud, and Agile Foundations — IBM',
      'Machine Learning with Python — IBM',
      'Front-End Web UI Frameworks and Tools : Bootstrap 4',
    ],
  },
  {
    issuer: 'Honoris',
    items: ['Soft Skills Certificate'],
  },
  {
    issuer: 'Oracle',
    items: ['Oracle Database Administration I (1Z0-082)'],
  },
]

const issuerColors = {
  Coursera: { bg: '#fff7ed', color: '#c2410c', border: '#fed7aa' },
  Honoris: { bg: '#f0fdf4', color: '#166534', border: '#bbf7d0' },
  Oracle: { bg: '#fef2f2', color: '#991b1b', border: '#fecaca' },
}

export default function Certificates() {
  return (
    <div className="section-card">
      <h2 className="section-title">Certificats</h2>
      <div className="cert-list">
        {certs.map((group, i) => (
          <div key={i} className="cert-group">
            <span
              className="cert-issuer"
              style={issuerColors[group.issuer] || {}}
            >
              {group.issuer}
            </span>
            <ul className="cert-items">
              {group.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
