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

      <section>
        <h3>
          {props.project.title}
        </h3>
        <Link to={`/projects/${url}`}>
          <button>
            Learn more
          </button>
        </Link>
      </section>
    </div>
  )
}

export default ProjectPreview