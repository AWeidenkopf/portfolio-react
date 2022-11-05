import { Link } from "react-router-dom"
import styles from './NavBar.module.css'
import { SlArrowDown } from 'react-icons/sl'
import { useState } from "react"

function NavBar({ detailsPage, setDetailsPage }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {detailsPage
        ? <nav className={styles.detailsPageNav}> <Link to='/' onClick={() => setDetailsPage(false)}> Go back </Link> </nav>
        : <nav>
          <Link to='/' className="home"> Ana Weidenkopf </Link>
          <ul>
            <li>
              <a href='#about' className={styles.about}> / / about </a>
            </li>

            <li>
              <a href="#contact"> / / contact </a>
            </li>

            <li>
              <a href="#projects"> / / projects </a>
            </li>

            <li className={styles.resume}> / / resume <SlArrowDown size={10} color='white' className={styles.toggle} onClick={() => setOpen(!open)} /></li>
            {open
              ? <a href="Resume Ana Weidenkopf - Software Developer.pdf" download='Resume Ana Weidenkopf - Software Developer.pdf' className={styles.download} onClick={() => setOpen(!open)}>Download Resume (PDF)</a>
              : null}

          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar