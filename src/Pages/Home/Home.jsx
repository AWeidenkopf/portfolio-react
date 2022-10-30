import styles from './Home.module.css'
// import '../../Components/NavBar/NavBar.css'
import { SlArrowDown } from 'react-icons/sl'
import 'animate.css'

const Home = () => {
  return ( 
    <>
    <div className={styles.homeContainer}>
      {/* <img src='backrgound.jpg' alt='hello'/> */}
    <h1 className={styles.name}>Ana Weidenkopf</h1>
    <p>{` { Software Developer } `}</p>
    </div>
    <div className={styles.arrow} >
    <SlArrowDown size={50} color='white' className={`animate__animated animate__pulse animate__infinite`}/>
    </div>
    </>
  )
}

export default Home
