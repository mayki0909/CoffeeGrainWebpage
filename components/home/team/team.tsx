import styles from './team.module.css';
import { NextComponentType } from 'next';
import { TeamMember } from './team-member';
import { SwiperHelper } from '../../shared/swiper/swiper';
import { useContext } from 'react';
import ScreenSizeContext from '../../../context/screenSize';


export const Team: NextComponentType = () => {
  const slides = [
    <TeamMember key={`slide-1`} name='Miha Znidar' title='Professional singer / Drifter / Newspapers seller' image='/images/TeamMember.png' />,
    <TeamMember key={`slide-2`} name='Name Surname' title='Professional singer / Drifter / Newspapers seller' image='/images/TeamMember.png' />,
    <TeamMember key={`slide-3`} name='SANDI SLJADOLJERDAR' title='Professional singer / Drifter / Newspapers seller' image='/images/TeamMember.png' />,
  ]
  const size = useContext(ScreenSizeContext);
  
  const setSlidesView = () => {
    if (size === 'xs') return 1
    if (size === 'sm') return 2
    if (size === 'md') return 2
    return 3
  }

  return (
    <section id='team'>
      <div className='container'>
        <h2 className={styles.heading}>MEET THE TEAM</h2>
        <div className='row mx-auto'>
          <SwiperHelper 
            loop={true} 
            spaceBetween={50} 
            slidesPerView={setSlidesView()} 
            slides={slides}
          />
        </div>
      </div>
    </section>
  )
}