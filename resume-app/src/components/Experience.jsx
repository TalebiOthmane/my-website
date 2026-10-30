import './Experience.css'

const experiences = [
  {
    role: 'Ingénieur Full Stack',
    company: 'ATNER [ Atlas Énergie ], Rabat',
    period: "Juin 2026 – Aujourd'hui",
    tasks: [
      "Développement et maintenance des applications internes utilisées quotidiennement par l'équipe Supply Chain : demandes d'achat, commandes fournisseurs, stocks, livraisons et suivi budgétaire.",
      'Recueil des besoins auprès du département des achats et traduction en spécifications fonctionnelles pour un système de bout en bout de gestion de stock et de facturation de location de matériel de coffrage.',
      "Mise en place d'un catalogue d'articles avec classification, gestion des mouvements de stock (acquisitions, affectations, retours) et vues de stock calculées.",
      "Développement d'un module de gestion des tarifs et de facturation mensuelle automatisée, avec génération de factures PDF et import de données depuis Excel.",
      "Remplacement d'un processus manuel sous Excel par une application centralisée, aujourd'hui utilisée par plus de 20 collaborateurs répartis sur 3 départements.",
      'Garantie de la fiabilité et de la qualité des données par une couverture de tests complète.',
    ],
    tech: ['Node.js', 'Express.js', 'React-Admin', 'SQL Server'],
  },
  {
    role: 'Ingénieur Backend (à distance)',
    company: 'Referso (startup)',
    period: 'Oct. 2025 – Mai 2026',
    tasks: [
      'Analyse des formulaires de besoins et des KPI clients pour définir les exigences fonctionnelles, puis conception et développement de bots sur mesure.',
      "Paramétrage des flux conversationnels et intégration d'APIs externes pour connecter les bots aux systèmes des clients.",
      'Réalisation de tests fonctionnels garantissant la fiabilité et la qualité de chaque bot livré.',
      'Collaboration à distance et suivi des tâches via Jira, Bitbucket et Slack.',
    ],
    tech: ['Python', 'APIs', 'Jira', 'Bitbucket', 'Git', 'Slack'],
  },
  {
    role: 'Stagiaire développement Full Stack',
    company: 'Scayf, Kénitra',
    period: 'Mars 2025 – Août 2025',
    tasks: [
      "Étude terrain auprès d'agences de location de voitures pour comprendre leurs besoins quotidiens et valider les exigences avant développement.",
      "Conception et développement d'une application centralisée de gestion : parc automobile, clients, réservations, contrats de location, maintenance, facturation et reporting.",
      "Travail en autonomie complète sur l'ensemble du stage de 6 mois, de l'analyse fonctionnelle et la conception de la base de données au développement et aux tests.",
    ],
    tech: ['Laravel', 'Blade', 'MySQL'],
  },
  {
    role: 'Stagiaire développement web',
    company: 'Syngenta, Rabat-Salé',
    period: 'Juin 2024 – Sept. 2024',
    tasks: [
      "Conception et développement d'une solution numérique de gestion et de suivi des stocks de produits chimiques.",
    ],
    tech: ['Python', 'Django', 'PostgreSQL'],
  },
  {
    role: 'Stagiaire ingénieur logiciel',
    company: 'ATNER, Rabat',
    period: 'Juin 2023 – Août 2023',
    tasks: [
      "Conception et développement d'une solution numérique de gestion et de suivi des flux financiers.",
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
