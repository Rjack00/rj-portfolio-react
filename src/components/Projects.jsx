import './Projects.css'

function ProjectCard({ project }) {
  return (
    <div id={project.id} className="project-card project-tile">
      <a href={project.href} target="_blank" rel="noreferrer">
        <img src={project.img} alt={`${project.title} screenshot`} />
        <h3>{project.title}</h3>
      </a>
    </div>
  )
}

function Projects({ projects }) {
  return (
    <section id="projects" className="projects-section">
      <h1 className="projects-section-title">
        Projects
      </h1>
      <div className="card-wrapper">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div></div>
    </section>
  )
}

export default Projects
