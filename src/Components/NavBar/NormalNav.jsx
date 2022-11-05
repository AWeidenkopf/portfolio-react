import NavLinks from "./NavLinks"
import styles from './NavBar.module.css'

const NormalNav = () => {
  return ( 
    <nav className={styles.navigation}>
    <NavLinks />
    </nav>
  )
}

export default NormalNav