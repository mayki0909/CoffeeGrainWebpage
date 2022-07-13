import { NextComponentType } from 'next';
import styles from './professions.module.css';


export const Professions: NextComponentType = () => {

  return (
    <div id='about' className='container mt-5'>
      <div className='row'>
        <div className='col-xs-12 col-lg-6'>
          <div className={styles.card}>
            <p className={styles.title}>GRAPHIC DESIGN</p>
            <p className={styles.description}>
              Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, 
              lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, 
              lorem ipsum, lorem ipsum, lorem ipsum 
            </p>
          </div>
        </div>
        <div className='col-xs-12 col-lg-6'>
          <div className={styles.card}>
            <p className={styles.title}>WEB SOLUTIONS</p>
            <p className={styles.description}>
              Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, 
              lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, 
              lorem ipsum, lorem ipsum, lorem ipsum 
            </p>
          </div>
        </div>
       
      </div>
    </div>
  )
}