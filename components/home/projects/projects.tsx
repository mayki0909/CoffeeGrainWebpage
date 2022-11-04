import styles from './projects.module.css';
import { NextComponentType } from 'next';
import { Project } from './project';
import { Wave } from '../../shared/wave/wave';
import { SwiperHelper } from '../../shared/swiper/swiper';

export const Projects: NextComponentType = () => {
  
  const slides = [
    <Project key={`slide-01`} name='01 Project name' title='Lipsum intensifies' description='There is theory which states that if ever anyone discovers excatly what the Universe is for and why is there.' projectLink='#' imageLink='/images/Projects.png' />,
    <Project key={`slide-02`} name='02 Project name' title='Lipsum intensifies' description='There is theory which states that if ever anyone discovers excatly what the Universe is for and why is there.' projectLink='#' imageLink='/images/Projects.png' />,
    <Project key={`slide-03`} name='03 Project name' title='Lipsum intensifies' description='There is theory which states that if ever anyone discovers excatly what the Universe is for and why is there.' projectLink='#' imageLink='/images/Projects.png' />,
  ]

  return (
    <section id='projects' className='backgroundBrown'>
      <Wave />
      <div className='container'>
        <p className={styles.recent}>RECENT PROJECTS</p>
        <SwiperHelper 
          loop={true} 
          spaceBetween={50} 
          slidesPerView={1} 
          slides={slides}
        />
      </div>
      <Wave upsideDown={true} />
    </section>
  )
}