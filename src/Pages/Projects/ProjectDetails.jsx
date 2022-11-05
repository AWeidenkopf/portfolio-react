import { findProject } from '../../utilities/findProject'
import { useParams } from "react-router-dom"
import styles from './ProjectDetails.module.css'

const ProjectDetails = () => {
  let  projectDetails  = useParams()

  const project = findProject(projectDetails.projectDetails)

  return (
    <div className={styles.projectpage}>
      <h1>{project.title}</h1>
      <div className={styles.imageContainer}>
      <img src={project.image} alt={project.title} />
      <img src={project.image2} alt='Tic tac toe winner'/>
      <img src={project.image3} alt='Tic tac toe computer wins'/>
      </div>
      <p>{project.description}</p>
      <div>
      <a href={project.repositoryLink} target="_blank" rel="noreferrer noopener"><button>Code Base</button></a>
      <a href={project.deploymentLink} target="_blank" rel="noreferrer noopener"><button>Deployed {project.title}</button></a>
      </div>
    </div>
  )
}

export default ProjectDetails