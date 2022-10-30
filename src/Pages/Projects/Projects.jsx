import ProjectsList from "../../Components/ProjectsList"
import { projects } from "../../data/projects"
import styles from './Projects.module.css'

const Projects = () => {
  return (
    <div className={styles.container}>
      <h1>My work</h1>
      <ProjectsList projects={projects} />
    </div>
  )
}

export default Projects