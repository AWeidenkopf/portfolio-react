import ProjectPreview from "./ProjectPreview"

const ProjectsList = ({projects}) => {
  return ( 
    <div>
    <ul>
    {projects.map(project => (
      <li><ProjectPreview title={project.title} image={project.image}/></li>
      ))}
      </ul>
    </div>
  )
}

export default ProjectsList