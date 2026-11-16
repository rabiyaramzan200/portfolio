import type { Project } from '../data/site'

export function ProjectPreview({ project }: { project: Project }) {
  return (
    <article className={`project-card project-card--${project.tone}`}>
      <div className="project-visual"><img src={project.image} alt={`Original art-direction study for ${project.title}; replace with approved project imagery.`} loading="lazy" /></div>
      <div className="project-caption"><span>{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><span className="project-arrow" aria-hidden="true">↗</span></div>
    </article>
  )
}
