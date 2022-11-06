import NavLinks from "./NavLinks";
import { useState } from "react"
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import styles from './NavBar.module.css'

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
      {open && <NavLinks closeMobileMenu={closeMobileMenu} isMobile={true} />}
    </nav>
  )
}

export default MobileNav;