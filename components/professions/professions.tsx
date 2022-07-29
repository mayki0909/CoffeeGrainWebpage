import { NextComponentType } from 'next';
import styles from './professions.module.css';


export const Professions: NextComponentType = () => {

  return (
    <section id='about' className='backgroundWhite'>
      <div className='container pt-5'>
        <div className='row'>
          <div className='col-xs-12 col-lg-4'>
            <div className={styles.card}>
              <img className={styles.image} src="/images/Miha.png" alt="" />
              <p className={styles.title}>Graphic design</p>
              <p className={styles.description}>
                Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, 
                lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, 
                lorem ipsum, lorem ipsum, lorem ipsum 
              </p>
            </div>
          </div>
          <div className='col-xs-12 col-lg-4'>
            <div className={styles.card}>
              <img className={styles.image} src="/images/Miha.png" alt="" />
              <p className={styles.title}>Web solutions</p>
              <p className={styles.description}>
                Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, 
                lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, 
                lorem ipsum, lorem ipsum, lorem ipsum 
              </p>
            </div>
          </div>
          <div className='col-xs-12 col-lg-4'>
            <div className={styles.card}>
              <img className={styles.image} src="/images/Miha.png" alt="" />
              <p className={styles.title}>Neki neki</p>
              <p className={styles.description}>
                Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, 
                lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, 
                lorem ipsum, lorem ipsum, lorem ipsum 
              </p>
            </div>
          </div> 
        </div>
      </div>
    </section>
  )
}