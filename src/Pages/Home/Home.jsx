import styles from './Home.module.css'
// import '../../Components/NavBar/NavBar.css'
import { SlArrowDown } from 'react-icons/sl'
import 'animate.css'
import About from '../../Components/About/About'
import Projects from '../../Components/Projects/Projects'
import Contact from '../../Components/Contact/Contact'
// import { SlArrowUp } from 'react-icons/sl'

const Home = ({ setDetailsPage }) => {

  return (
    <>
      <div id='home' className={styles.homeContainer}>
        <h1 className={styles.name}>Ana Weidenkopf</h1>
        <p>{` { Software Developer } `}</p>
      </div>
      <div className={styles.arrow} >
        <a href='#about'><SlArrowDown size={50} className={`animate__animated animate__pulse animate__infinite`} /></a>
      </div>
      <div id='about' className={styles.about}>
        <About />
      </div>
      <div id='projects'>
        <Projects setDetailsPage={setDetailsPage} />
      </div>
      <div id='contact'>
        <Contact />
      </div>
      {/* <a href='#home'>
      <div className={styles.upArrow}>
      <SlArrowUp size={50} color='white'/>
      </div>
      </a> */}
    </>
  )
}

export default Home
