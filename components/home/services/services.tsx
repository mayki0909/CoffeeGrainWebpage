import styles from './services.module.css';
import { Service } from './service';

export const Services = () => {
  return (
    <section id='services' className='container'>
      <div className='row'>
        <div className='col-12 col-lg-5'>
          <p><strong>OUR SERVICES</strong></p>
          <h2 className={styles.h2}>Turning ideas into reality.</h2>
          <p className={styles.text}>At our creative agency, we help you turn your idea into reality. We help you from the conception of the idea, through development, production and then promotion.</p>
        </div>
        <div className='col-12 col-lg-7'>
          <div className='row'>
            <Service title='Web development' text='We develop customised web applications, which have the advantage of working on all devices that can access a web browser.' icon='/icons/services/computer.svg'/>
            <Service title='App development' text='We develop applications according to the client`s needs, wishes and requirements. You know the time we are in touch with the latest technologies.' icon='/icons/services/phone.svg'/>
            <Service title='Video production' text='Filming and editing of all types of video material, which includes advertisements, commercials, events, music videos, animations. ' icon='/icons/services/camera.svg'/>
            <Service title='Graphic design' text='Fast and high quality production of logo, corporate identity, printed materials, marketing materials. ' icon='/icons/services/pen.svg'/>
          </div>
        </div>
      </div>
    </section>
  )
}