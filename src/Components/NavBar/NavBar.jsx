import { Link } from "react-router-dom"
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <nav>
      <Link to='/' className="home"> Ana Weidenkopf </Link>

      <ul>
        <li>
          <Link to='/about' className={styles.about}> / / about </Link>
        </li>

        <li>
        <Link to='/contact' > / / contact </Link>
        </li>

        <li>
        <Link to='/resume' > / / resume </Link>
        </li>

        <li>
        <Link to='/projects' > / / projects </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar