import NavLinks from "./NavLinks"
import styles from './NavBar.module.css'

const NormalNav = ({ setDetailsPage, detailsPage }) => {
  return (
    <nav className={styles.navigation}>
      <NavLinks detailsPage={detailsPage} setDetailsPage={setDetailsPage} />
    </nav>
  )
}

export default NormalNav