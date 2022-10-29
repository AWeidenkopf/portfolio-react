import ProjectsList from "../../Components/ProjectsList"
import { projects } from "../../data/projects"

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <ProjectsList projects={projects} />
    </div>
  )
}

export default Projects