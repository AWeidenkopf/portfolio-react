import { findProject } from '../../utilities/findProject'
import { useParams } from "react-router-dom"

const ProjectDetails = () => {
  let  projectDetails  = useParams()

  const project = findProject(projectDetails.projectDetails)
  console.log('here', project)
  console.log(project.image)
  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} />
      <a href={project.repositoryLink} target="_blank" rel="noreferrer noopener"><button>code base</button></a>
      <a href={project.deploymentLink} target="_blank" rel="noreferrer noopener"><button>deployed {project.title}</button></a>


    </div>
  )
}

export default ProjectDetails