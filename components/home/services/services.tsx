import styles from './services.module.css';
import { Service } from './service';

export const Services = () => {
  return (
    <section id='services' className='container'>
      <div className='row'>
        <div className='col-12 col-lg-5'>
          <p><strong>OUR SERVICES</strong></p>
          <h2 className={styles.h2}>Turnin ideas into reality.</h2>
          <p className={styles.text}>We offer many quality services, executed by our proffesional stuff trained to create super polished websites.</p>
        </div>
        <div className='col-12 col-lg-7'>
          <div className='row'>
            <Service title='Web development' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' icon='/icons/services/computer.svg'/>
            <Service title='App development' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' icon='/icons/services/phone.svg'/>
            <Service title='Video production' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' icon='/icons/services/camera.svg'/>
            <Service title='Graphic design' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' icon='/icons/services/pen.svg'/>
          </div>
        </div>
      </div>
    </section>
  )
}