import { projects } from "../data/projects"
import { hyphenateWords } from './hyphenateWords'

function findProject(str) {

  const foundProject = projects.filter(project => hyphenateWords(project.title) === str)

  return foundProject[0]
}


export { findProject }