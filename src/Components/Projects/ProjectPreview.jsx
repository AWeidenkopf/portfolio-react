import { Link } from "react-router-dom"
import { hyphenateWords } from "../../utilities/hyphenateWords"
import styles from './ProjectPreview.module.css'

const ProjectPreview = (props) => {

  const url = hyphenateWords(props.project.title)

  return (
    <div className={styles.container}>
      <img
        src={props.project.image}
        alt={props.project.title}
      />

      <div className={styles.footer}>
        <h3>
          {props.project.title}
        </h3>
        <Link to={`/projects/${url}`}>
          <button>
            Learn more
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ProjectPreview