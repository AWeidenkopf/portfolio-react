import styles from './Home.module.css'
// import '../../Components/NavBar/NavBar.css'
import { SlArrowDown } from 'react-icons/sl'
import 'animate.css'
import About from '../About/About'
import Projects from '../Projects/Projects'

const Home = () => {
  return ( 
    <>
    <div className={styles.homeContainer}>
      {/* <img src='backrgound.jpg' alt='hello'/> */}
    <h1 className={styles.name}>Ana Weidenkopf</h1>
    <p>{` { Software Developer } `}</p>
    </div>
    <div className={styles.arrow} >
    <a href='#about'><SlArrowDown size={50} color='white' className={`animate__animated animate__pulse animate__infinite`}/></a>
    </div>
    <div id='about' className={styles.about}>
    <About />
    </div>
    <div id='projects'>
      <Projects />
    </div>
    </>
  )
}

export default Home
