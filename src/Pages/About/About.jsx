import styles from './About.module.css'
import { HiOutlineDesktopComputer } from 'react-icons/hi'

const About = () => {
  return (
    <div className='about-container'>
    <h2>About me</h2>
      <div className={styles.aboutContainer}>
        <div className={styles.innerContainer}>
          <HiOutlineDesktopComputer />
          <p>Software developer</p>

        </div>
        <div className={styles.innerContainer}>
        <img src="Ana-Weidenkopf.jpeg" alt="Ana Weidenkopf"/>
        </div>
        <div className={styles.innerContainer}>

        </div>

      </div>
    </div>
  )
}

export default About;