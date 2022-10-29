import { projects } from "../data/projects"
import { findProject } from '../utilities/findProject'
import { useLocation } from "react-router-dom"

const ProjectDetails = () => {
  const location = useLocation()
  const project = findProject(location.pathname)
  return ( 
    <div>
      {console.log(project)}
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} />
      <a href={project.repositoryLink} target="_blank" rel="noreferrer noopener"><button>code base</button></a>
      <a href={project.deploymentLink} target="_blank" rel="noreferrer noopener"><button>deployed {project.title}</button></a>


    </div>
  )
}

export default ProjectDetails