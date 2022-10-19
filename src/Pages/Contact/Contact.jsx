import './Contact.css'
import { FaGithub, FaLinkedinIn, FaAt } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='contact-container'>
      {/* <h1>Contact</h1> */}
      <h3>Let's work together!</h3>
      <a href='https://github.com/AWeidenkopf' target="_blank" rel="noreferrer noopener"><FaGithub /></a>
      <a href='https://www.linkedin.com/in/ana-weidenkopf/' target="_blank" rel="noreferrer noopener"><FaLinkedinIn /></a>
      <a href='mailto:aweidenkopf@gmail.com'><FaAt /></a>

    </div>
  )
}

export default Contact