import ProjectPreview from "./ProjectPreview"

const ProjectsList = ({ projects, setDetailsPage }) => {
  return (
    <>
      {projects.map((project, idx) => (
        <div key={idx}><ProjectPreview project={project} setDetailsPage={setDetailsPage} /></div>
      ))}
    </>
  )
}

export default ProjectsList