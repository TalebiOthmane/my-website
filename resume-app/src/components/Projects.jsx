import './Projects.css'

const projects = [
  {
    name: 'Application de gestion des candidatures de stage',
    tech: ['Spring Boot', 'JEE', 'Design Patterns', 'Classification par IA'],
  },
  {
    name: 'Application de gestion hospitalière',
    tech: ['UML', 'Spring Boot', 'JEE', 'Design Patterns'],
  },
  {
    name: 'Plateforme de gestion des stocks',
    tech: ['JEE'],
  },
  {
    name: 'Application mobile de gestion de recettes',
    tech: ['Java Mobile', 'Jira'],
  },
  {
    name: 'Chatbot pour un café local',
    tech: ['IA'],
  },
]

export default function Projects() {
  return (
    <div className="section-card">
      <h2 className="section-title">Projets académiques</h2>
      <div className="projects-list">
        {projects.map((project, i) => (
          <div key={i} className="project-item">
            <div className="project-name">{project.name}</div>
            <div className="project-tech">
              {project.tech.map((t, j) => (
                <span key={j} className="tech-tag-alt">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
