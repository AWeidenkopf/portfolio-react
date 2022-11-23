import styles from './About.module.css'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { CgGirl } from 'react-icons/cg'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { SiCsswizardry } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { TbBrandBootstrap } from 'react-icons/tb'
import { FaReact, FaRegHeart, FaPeopleArrows, FaPeopleCarry, FaBatteryFull} from 'react-icons/fa'
import { SiExpress, SiNodedotjs, SiMongodb, SiPython, SiPostgresql } from 'react-icons/si'
import { DiDjango } from 'react-icons/di'
import { GiSkills } from 'react-icons/gi'
import { SlCalender } from 'react-icons/sl'
import { BsChatDots } from 'react-icons/bs'
import { GiEarthAmerica, GiArtilleryShell } from 'react-icons/gi'
import { RiHandHeartLine } from 'react-icons/ri'




const About = () => {
  return (
    <div className='about-container'>
      <h2>About me</h2>
      <div className={styles.aboutContainer}>
        <div className={styles.innerContainer}>
          <GiSkills className={styles.icon}/>
          <p>People Skills</p>
          <div className={styles.iconsDiv}>
            <div className={styles.tooltip}>
              <SlCalender size='30' />
              <span className={styles.tooltiptext}>Planning</span>
            </div>
            <div className={styles.tooltip}>
              <BsChatDots size='30' />
              <span className={styles.tooltiptext}>Communication</span>
            </div>
            <div className={styles.tooltip}>
              <GiEarthAmerica size='30' />
              <span className={styles.tooltiptext}>Diplomacy</span>
            </div>
            <div className={styles.tooltip}>
              <GiArtilleryShell size='30' />
              <span className={styles.tooltiptext}>Creativity</span>
            </div>
            <div className={styles.tooltip}>
              <FaRegHeart size='30' />
              <span className={styles.tooltiptext}>Passion</span>
            </div>
            <div className={styles.tooltip}>
              <FaPeopleArrows size='30' />
              <span className={styles.tooltiptext}>Social Assertiveness</span>
            </div>
            <div className={styles.tooltip}>
              <FaPeopleCarry size='30' />
              <span className={styles.tooltiptext}>Team Work</span>
            </div>
            <div className={styles.tooltip}>
              <FaBatteryFull size='30' />
              <span className={styles.tooltiptext}>Self-motivation</span>
            </div>
            <div className={styles.tooltip}>
              <RiHandHeartLine size='30' />
              <span className={styles.tooltiptext}>Conflict resolution</span>
            </div>
            {/* <div className={styles.tooltip}>
              <DiDjango size='30' />
              <span className={styles.tooltiptext}>Django</span>
            </div>
            <div className={styles.tooltip}>
              <SiPostgresql size='30' />
              <span className={styles.tooltiptext}>PostgreSQL</span>
            </div> */}
          </div>
          {/* <img src="/images/Ana-Weidenkopf.jpeg" alt="Ana Weidenkopf" /> */}


        </div>
        <div className={styles.innerContainer}>
          <CgGirl className={styles.icon} />
          <p>Hi I'm Ana</p>
          <span>
            {`<h4>`}
          </span>
          <ul>
            <li>A software engineer with background in</li>
            <li>project management that loves languages!</li>
            <li>My interest in languages makes coding</li>
            <li>a real joy. I love learning each language's</li>
            <li>syntax, rules and flexibility just like I love</li>
            <li>learning the idiosyncrasy of spoken languages.</li>
            <li>My passion is what fuels me, making</li>
            <li>me one always eager learner that works to </li>
            <li>create software that executes flawlessly.</li>
          </ul>
          <span>
            {`</h4>`}
          </span>
        </div>
        <div className={styles.innerContainer}>
          <HiOutlineDesktopComputer className={styles.icon} />
          <p> Software Development Skills</p>
          <div className={styles.iconsDiv}>
            <div className={styles.tooltip}>
              <AiOutlineHtml5 size='30' />
              <span className={styles.tooltiptext}>HTML</span>
            </div>
            <div className={styles.tooltip}>
              <SiCsswizardry size='30' />
              <span className={styles.tooltiptext}>CSS</span>
            </div>
            <div className={styles.tooltip}>
              <IoLogoJavascript size='30' />
              <span className={styles.tooltiptext}>JavaScript</span>
            </div>
            <div className={styles.tooltip}>
              <TbBrandBootstrap size='30' />
              <span className={styles.tooltiptext}>Bootstrap</span>
            </div>
            <div className={styles.tooltip}>
              <FaReact size='30' />
              <span className={styles.tooltiptext}>React</span>
            </div>
            <div className={styles.tooltip}>
              <SiExpress size='30' />
              <span className={styles.tooltiptext}>Express.js</span>
            </div>
            <div className={styles.tooltip}>
              <SiNodedotjs size='30' />
              <span className={styles.tooltiptext}>Node.js</span>
            </div>
            <div className={styles.tooltip}>
              <SiMongodb size='30' />
              <span className={styles.tooltiptext}>MongoDB</span>
            </div>
            <div className={styles.tooltip}>
              <SiPython size='30' />
              <span className={styles.tooltiptext}>Python</span>
            </div>
            <div className={styles.tooltip}>
              <DiDjango size='30' />
              <span className={styles.tooltiptext}>Django</span>
            </div>
            <div className={styles.tooltip}>
              <SiPostgresql size='30' />
              <span className={styles.tooltiptext}>PostgreSQL</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About;