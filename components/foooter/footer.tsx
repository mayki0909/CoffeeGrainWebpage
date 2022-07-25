import { NextComponentType } from 'next';
import styles from './footer.module.css';


export const Footer: NextComponentType = () => {

  return (
    <footer className='backgroundBrown'>
      <div className='spacer wave3'></div>
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
          <div className={styles.contactCircle}>
            <p>GET IN TOUCH</p>
          </div>
        </div>
        <div className='row'>
          <div className='d-flex'>
            <p className={styles.contactItem}>info@coffeegrainstudios.com</p>
            <p className={styles.contactItem}>+384 234 032</p>
          </div>
        </div>
      </div>
    </footer>
  )
}