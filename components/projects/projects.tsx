import { NextComponentType } from 'next';
import styles from './projects.module.css';

export const Projects: NextComponentType = () => {
  return (
    <section id='projects' className='backgroundBrown'>
      <div className='wave'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <p className={styles.recent}>RECENT PROJECTS</p>
            <p className={styles.projectName}>01 Project name</p>
            <h2 className={styles.title}>Lorem Ipsum is simply dummy text</h2>
            <p className={styles.description}>
              There is theory which states that if 
              ever anyone discovers excatly what 
              the Universe is for and why is there.
            </p>
            <a className={styles.button} href="">
              View the project
            </a>
          </div>
          <div className='col-6'>
            <img className={styles.image} src='/images/Miha.png' alt='Projects featured image' />
          </div>
        </div>
      </div>
      <div className='waveBottom'></div>
    </section>
  )
}