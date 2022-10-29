import ProjectPreview from "./ProjectPreview"

const ProjectsList = ({projects}) => {
  return ( 
    <div>
    <ul>
    {projects.map(project => (
      <li><ProjectPreview project={project}/></li>
      ))}
      </ul>
    </div>
  )
}

export default ProjectsList