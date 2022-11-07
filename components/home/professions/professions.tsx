
import { NextComponentType } from 'next';
import { useContext } from 'react';
import { SwiperHelper } from '../../shared/swiper/swiper';
import { Profession } from './profession';
import ScreenSizeContext from '../../../context/screenSize';

export const Professions: NextComponentType = () => {

  const slides = [
    <Profession key={`slide-1`} title='Graphic Designer' description='Lorem ipsum' image='/images/Miha.png' />,
    <Profession key={`slide-2`} title='Web Designer' description='Lorem ipsum' image='/images/Miha.png' />,
    <Profession key={`slide-3`} title='Stn Stn' description='Lorem ipsum' image='/images/Miha.png' />,
    <Profession key={`slide-4`} title='Stn Stn' description='Lorem ipsum' image='/images/Miha.png' />,
    <Profession key={`slide-5`} title='Stn Stn' description='Lorem ipsum' image='/images/Miha.png' />,
    <Profession key={`slide-6`} title='Stn Stn' description='Lorem ipsum' image='/images/Miha.png' />,
  ]

  const size = useContext(ScreenSizeContext);
  
  const setSlidesView = () => {
    if (size === 'xs') return 1
    if (size === 'sm') return 2
    if (size === 'md') return 2
    return 3
  }

  return (
    <section id='about' className='backgroundWhite'>
      <div className='container pt-5'>
        <div className='row gy-4'>
          <SwiperHelper 
            loop={true} 
            spaceBetween={0} 
            slidesPerView={setSlidesView()} 
            slides={slides}
          />
        </div>
      </div>
    </section>
  )
}