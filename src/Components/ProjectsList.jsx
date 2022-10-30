import ProjectPreview from "./Projects/ProjectPreview"

const ProjectsList = ({ projects }) => {
  return (
    <>
      {projects.map(project => (
        <div><ProjectPreview project={project} /></div>
      ))}
    </>
  )
}

export default ProjectsList