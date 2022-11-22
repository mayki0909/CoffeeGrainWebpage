import { NextComponentType } from 'next';
import { Wave } from '../../shared/wave/wave';
import styles from './footer.module.css';


export const Footer: NextComponentType = () => {

  return (
    <footer id='footer' className='backgroundBrown'>
      <Wave />
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 col-lg-3'>
            <img className={styles.logo} src="/images/LogoWhite.webp" alt="Coffee grain studios logo" />
          </div>
          <div className='col-md-9 col-lg-6'>
            <p className={styles.heading}>LET&#39;S WORK TOGETHER</p>
          </div>
        </div>
        <div className={`row d-flex justify-content-start ${styles.smallRow}`}>
          <div className='col'>
            <hr className={styles.line} />
            <div className={styles.contactCircle}>
              <p>GET IN TOUCH</p>
            </div>
          </div>
        </div>
        <div className='row d-flex justify-content-start'>
          <div className='col-9'>
            <div className='d-flex flex-wrap'>
              <a href='mailto:info@coffeegrainstudios.com' className={styles.contactItem}>info@coffeegrainstudios.com</a>
              <a href='callto:+38642340320' className={styles.contactItem}>+386 42 340 320</a>
            </div>
          </div>
        </div>
        <div className='row pb-5 flex-row-reverse'>
          <div className='col-md-3 ml-5'>
            <p className={styles.socialsText}>SOCIALS</p>
            <div className='row justify-content-center'>
              <div className='col-2'>
                <a href="https://insagram.com">
                  <img className={styles.icon} src="/favicon.ico" alt="Social media icon" />
                </a>
              </div>
              <div className='col-2'>
                <a href="https://insagram.com">
                  <img className={styles.icon} src="/favicon.ico" alt="Social media icon" />
                </a>
              </div>
              <div className='col-2'>
                <a href="https://insagram.com">
                  <img className={styles.icon} src="/favicon.ico" alt="Social media icon" />
                </a>
              </div>
              <div className='col-2'>
                <a href="https://insagram.com">
                  <img className={styles.icon} src="/favicon.ico" alt="Social media icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}