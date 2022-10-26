import { NextComponentType } from 'next';
import { Wave } from '../../shared/wave/wave';
import { Project } from './project';
import styles from './projects.module.css';

export const Projects: NextComponentType = () => {
  return (
    <section id='projects' className='backgroundBrown'>
      <Wave />
      <div className='container'>
        <p className={styles.recent}>RECENT PROJECTS</p>
        <Project name='01 Project name' title='Lipsum intensifies' description='There is theory which states that if ever anyone discovers excatly what the Universe is for and why is there.' projectLink='#' imageLink='/images/Projects.png' />
        <Project name='01 Project name' title='Lipsum intensifies' description='There is theory which states that if ever anyone discovers excatly what the Universe is for and why is there.' projectLink='#' imageLink='/images/Projects.png' />
        <Project name='01 Project name' title='Lipsum intensifies' description='There is theory which states that if ever anyone discovers excatly what the Universe is for and why is there.' projectLink='#' imageLink='/images/Projects.png' />
      </div>
      <Wave upsideDown={true} />
    </section>
  )
}