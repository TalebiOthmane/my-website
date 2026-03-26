import './Skills.css'

const skills = [
  {
    category: 'Front-end',
    items: ['HTML', 'CSS', 'Bootstrap', 'React', 'Angular', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Back-end',
    items: ['Java', 'Spring', 'Jakarta EE', 'Node.js', 'C++', 'Python', 'Laravel', 'PHP'],
  },
  {
    category: 'Bases de données',
    items: ['PostgreSQL', 'MySQL', 'Microsoft SQL Server', 'Oracle 11g'],
  },
  {
    category: 'Modélisation',
    items: ['Merise', 'UML'],
  },
  {
    category: 'Outils',
    items: ['Git', 'GitHub', 'Docker', 'Maven', 'Azure Pipelines', 'Kubernetes', 'Scrum', 'LATEX'],
  },
]

export default function Skills() {
  return (
    <div className="section-card">
      <h2 className="section-title">Compétences</h2>
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
