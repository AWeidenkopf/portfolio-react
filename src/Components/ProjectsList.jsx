import ProjectPreview from "./Projects/ProjectPreview"

const ProjectsList = ({ projects }) => {
  return (
    <div>
      {projects.map(project => (
        <div><ProjectPreview project={project} /></div>
      ))}
    </div>
  )
}

export default ProjectsList