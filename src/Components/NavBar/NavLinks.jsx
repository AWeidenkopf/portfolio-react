import { Link } from "react-router-dom"
import styles from './NavBar.module.css'
import { SlArrowDown } from 'react-icons/sl'
import { useState } from "react"

function NavLinks({ detailsPage, setDetailsPage, closeMobileMenu, isMobile}) {
  const [open, setOpen] = useState(false)


  return (
    <>
      {detailsPage
        ? <div className={styles.detailsPageNav}> <Link to='/' onClick={() => setDetailsPage(false)}> Go back </Link> </div>
        : <> 
          {isMobile ?
          <ul className={styles.navUl}>
            <li className={styles.links} onClick={() => closeMobileMenu()}>
              <a href='#about' className={styles.about}> / / about </a>
            </li>

            <li className={styles.links} onClick={() =>  closeMobileMenu()}>
              <a href="#contact"> / / contact </a>
            </li>

            <li className={styles.links} onClick={() =>  closeMobileMenu()}>
              <a href="#projects"> / / projects </a>
            </li>

            <li className={`${styles.resume} ${styles.links}`}> / / resume <SlArrowDown size={10} color='white' className={styles.toggle} onClick={() => setOpen(!open)} /></li>
            {open
              ? <a href="Resume Ana Weidenkopf - Software Developer.pdf" download='Resume Ana Weidenkopf - Software Developer.pdf' className={styles.download } onClick={() => setOpen(!open)}>Download Resume (PDF)</a>
              : null}

          </ul>
          :<> 
          <Link to='/' className="home" > Ana Weidenkopf </Link>
          <ul className={styles.navUl}>
            <li className={styles.links}>
              <a href='#about' className={styles.about}> / / about </a>
            </li>

            <li className={styles.links}>
              <a href="#contact"> / / contact </a>
            </li>

            <li className={styles.links}>
              <a href="#projects"> / / projects </a>
            </li>

            <li className={`${styles.resume} ${styles.links}`}> / / resume <SlArrowDown size={10} color='white' className={styles.toggle} onClick={() => setOpen(!open)} /></li>
            {open
              ? <a href="Resume Ana Weidenkopf - Software Developer.pdf" download='Resume Ana Weidenkopf - Software Developer.pdf' className={styles.download } onClick={() => setOpen(!open)}>Download Resume (PDF)</a>
              : null}

          </ul>
          </>
}
        </>
      }
    </>
  )
}

export default NavLinks