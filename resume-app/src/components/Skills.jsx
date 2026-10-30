import './Skills.css'

const skills = [
  {
    category: 'Back-end',
    items: ['Node.js', 'Express.js', 'Python', 'Django', 'Laravel', 'PHP', 'Java', 'Spring', 'Jakarta EE', 'C++'],
  },
  {
    category: 'Front-end',
    items: ['React', 'React-Admin', 'Angular', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    category: 'Bases de données',
    items: ['Microsoft SQL Server', 'PostgreSQL', 'MySQL', 'Oracle 11g'],
  },
  {
    category: 'Analyse & modélisation',
    items: ['Recueil des besoins', 'Analyse des KPI', 'Besoin métier → solution fonctionnelle', 'UML', 'Merise'],
  },
  {
    category: 'Outils & méthodes',
    items: ['Git', 'GitHub', 'Bitbucket', 'Docker', 'Kubernetes', 'Maven', 'Azure Pipelines', 'Jira', 'Agile (Scrum)', 'LaTeX'],
  },
]

export default function Skills() {
  return (
    <div className="section-card">
      <h2 className="section-title">Compétences techniques</h2>
      <div className="skills-list">
        {skills.map((group, i) => (
          <div key={i} className="skill-group">
            <p className="skill-category">{group.category}</p>
            <div className="skill-tags">
              {group.items.map((item, j) => (
                <span key={j} className="skill-tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
