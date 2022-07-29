import { NextComponentType } from 'next';
import styles from './footer.module.css';


export const Footer: NextComponentType = () => {

  return (
    <footer id='footer' className='backgroundBrown'>
      <div className='wave'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 col-lg-3'>
            <img className={styles.logo} src="/images/LogoWhite.webp" alt="Coffee grain studios logo" />
          </div>
          <div className='col-md-9 col-lg-6'>
            <p className={styles.heading}>LET&#39;S WORK TOGETHER</p>
          </div>
        </div>
        <div className='row d-flex justify-content-end'>
          <hr className={styles.line} />
          <div className='col-9'>
            <div className='d-flex'>
              <p className={styles.contactItem}>info@coffeegrainstudios.com</p>
              <p className={styles.contactItem}>+384 234 032</p>
            </div>
          </div>
          <div className='col-3'>
            <div className={styles.contactCircle}>
              <p>GET IN TOUCH</p>
            </div>
          </div>
        </div>
        <div className='row pb-5'>
          <div className='offset-9 col-3'>
            <p className={styles.socialsText}>SOCIALS</p>
            <div className='row'>
              <div className='col-2'>
                <a href="">
                  <img className={styles.icon} src="/favicon.ico" alt="Social media icon" />
                </a>
              </div>
              <div className='col-2'>
                <a href="">
                  <img className={styles.icon} src="/favicon.ico" alt="Social media icon" />
                </a>
              </div>
              <div className='col-2'>
                <a href="">
                  <img className={styles.icon} src="/favicon.ico" alt="Social media icon" />
                </a>
              </div>
              <div className='col-2'>
                <a href="">
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