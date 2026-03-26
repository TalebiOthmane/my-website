import './Projects.css'

const projects = [
  {
    name: 'Application de gestion des candidatures de stage',
    tech: ['Design Pattern', 'JEE', 'Spring Boot', 'AI'],
  },
  {
    name: "Application de gestion des hôpitaux",
    tech: ['UML', 'Design Pattern', 'JEE', 'Spring Boot'],
  },
  {
    name: 'Application mobile de gestion des recettes',
    tech: ['Java Mobile', 'JIRA'],
  },
  {
    name: 'Chatbot pour un café local',
    tech: ['IA'],
  },
  {
    name: 'Plateforme de gestion des stocks',
    tech: ['JEE'],
  },
]

export default function Projects() {
  return (
    <div className="section-card">
      <h2 className="section-title">Projets</h2>
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
