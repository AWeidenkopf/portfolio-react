import NavLinks from "./NavLinks";
import { useState } from "react"
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import styles from './NavBar.module.css'
import { Link } from "react-router-dom"
import { SlArrowLeft } from "react-icons/sl"

const MobileNav = ({ setDetailsPage, detailsPage }) => {
  const [open, setOpen] = useState(false)

  const hamburgerIcon = <AiOutlineMenu
    className={styles.hamburger}
    size="30px"
    color="white"
    onClick={() => setOpen(!open)}
  />

  const closeIcon = <AiOutlineClose
    className={styles.hamburger}
    size="30px"
    color="white"
    onClick={() => { console.log('closing'); setOpen(false) }} />

  const closeMobileMenu = () => setOpen(false)

  return (
    <nav className={styles.mobileNavigation}>
      {open
        ? closeIcon
        : hamburgerIcon}
      {open 
      ? detailsPage 
      ? <Link to='/' onClick={() => `${setDetailsPage(false)} ${setOpen(false)}`} className={styles.detailsPageNav}> <SlArrowLeft size={30} color='white' className={styles.goBackArrow} onMouseOver={({ target }) => target.style.color = "rgb(135, 182, 226)"} onMouseOut={({ target }) => target.style.color = "white"}/> Go back </Link>
      : <NavLinks closeMobileMenu={closeMobileMenu} isMobile={true} />
    : null}
    </nav>
  )
}

export default MobileNav;