import './Experience.css'

const experiences = [
  {
    role: 'Ingénieur Backend (à distance)',
    company: 'Referso (Startup)',
    period: 'Oct. 2025 – Aujourd\'hui',
    tasks: [
      'Création manuelle de bots répondant aux besoins fonctionnels des clients.',
      'Paramétrage des flux conversationnels et intégration via des APIs externes.',
      'Réalisation de tests fonctionnels afin de garantir la fiabilité et la qualité des bots livrés.',
      'Collaboration à distance et suivi des tâches via des outils de gestion de projet.',
    ],
    tech: ['Python', 'APIs', 'Jira', 'Bitbucket', 'Git'],
  },
  {
    role: 'Stagiaire en Développement Web',
    company: 'Scayf, Kenitra',
    period: 'Mar. 2025 – Août 2025',
    tasks: [
      "Développement d'une application de gestion digitale pour les agences de location de voitures.",
    ],
    tech: ['Laravel', 'Blade', 'MySQL'],
  },
  {
    role: 'Stagiaire en Développement Web',
    company: 'Syngenta, Rabat-Salé',
    period: 'Juin 2024 – Sept. 2024',
    tasks: [
      'Conception d\'une solution numérique pour la gestion et le suivi des stocks de produits chimiques.',
    ],
    tech: ['Python', 'Django', 'PostgreSQL'],
  },
  {
    role: 'Stagiaire en Développement Web',
    company: 'ATNER, Rabat',
    period: 'Juin 2023 – Août 2023',
    tasks: [
      'Conception d\'une solution numérique de gestion et de suivi des flux financiers.',
    ],
    tech: ['Django', 'Node.js', 'MySQL'],
  },
]

export default function Experience() {
  return (
    <div className="section-card">
      <h2 className="section-title">Expériences Professionnelles</h2>
      <div className="exp-list">
        {experiences.map((exp, i) => (
          <div key={i} className="exp-item">
            <div className="exp-dot" />
            <div className="exp-content">
              <div className="exp-header">
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <span className="exp-company">{exp.company}</span>
                </div>
                <span className="exp-period">{exp.period}</span>
              </div>
              <ul className="exp-tasks">
                {exp.tasks.map((t, j) => (
                  <li key={j}>{t}</li>
                ))}
              </ul>
              <div className="exp-tech">
                {exp.tech.map((t, j) => (
                  <span key={j} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
