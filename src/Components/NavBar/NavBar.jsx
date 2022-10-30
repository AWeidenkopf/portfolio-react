import { Link } from "react-router-dom"
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <nav>
      <Link to='/' className="home"> Ana Weidenkopf </Link>

      <ul>
        <li>
          <a href='#about' className={styles.about}> / / about </a>
        </li>

        <li>
        <a href="#contact"> / / contact </a>
        </li>

        <li>
        <Link to='/resume' > / / resume </Link>
        </li>

        <li>
        <a href="#projects"> / / projects </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar