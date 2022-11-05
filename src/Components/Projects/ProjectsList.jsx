import ProjectPreview from "./ProjectPreview"

const ProjectsList = ({ projects }) => {
  return (
    <>
      {projects.map((project,idx) => (
        <div key={idx}><ProjectPreview project={project} /></div>
      ))}
    </>
  )
}

export default ProjectsList