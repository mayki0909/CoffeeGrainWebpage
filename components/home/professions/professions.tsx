import { NextComponentType } from 'next';
import { Profession } from './profession';

export const Professions: NextComponentType = () => {

  return (
    <section id='about' className='backgroundWhite'>
      <div className='container pt-5'>
        <div className='row gy-4'>
          <Profession title='Graphic Designer' description='Lorem ipsum' image='/images/Miha.png' />
          <Profession title='Web Designer' description='Lorem ipsum' image='/images/Miha.png' />
          <Profession title='Stn Stn' description='Lorem ipsum' image='/images/Miha.png' />
          <Profession title='Stn Stn' description='Lorem ipsum' image='/images/Miha.png' />
          <Profession title='Stn Stn' description='Lorem ipsum' image='/images/Miha.png' />
          <Profession title='Stn Stn' description='Lorem ipsum' image='/images/Miha.png' />
          <Profession title='Stn Stn' description='Lorem ipsum' image='/images/Miha.png' />
          <Profession title='Stn Stn' description='Lorem ipsum' image='/images/Miha.png' />
          <Profession title='Stn Stn' description='Lorem ipsum' image='/images/Miha.png' />
        </div>
      </div>
    </section>
  )
}