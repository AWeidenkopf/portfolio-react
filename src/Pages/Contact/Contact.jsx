import styles from './Contact.module.css'
import { FaGithub, FaLinkedinIn, FaAt } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className={styles.container}>
      
        <p>What's next?</p>
        <h2 className={styles.title}>Get in touch</h2>
        <ul>
          <li>I'm currently looking for my next opportunity.</li>
          <li>If you either have the perfect job or just want to say hi,</li>
          <li>here's how to connect:</li>
        </ul>
        <div className={styles.contactLinks}>
      <a href='https://github.com/AWeidenkopf' target="_blank" rel="noreferrer noopener"><FaGithub className={styles.link}/>GitHub</a>
      <a href='https://www.linkedin.com/in/ana-weidenkopf/' target="_blank" rel="noreferrer noopener"><FaLinkedinIn className={styles.link}/>LinkedIn</a>
      <a href='mailto:aweidenkopf@gmail.com'><FaAt className={styles.link}/>Email</a>
      </div>
      <div className={styles.footer}>
      <p >Whoops! I almost forgot to say: 'Hello World'</p>
      </div>
    </div>
  )
}

export default Contact