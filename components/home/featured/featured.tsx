import { NextComponentType } from 'next';
import styles from './featured.module.css';


export const Featured: NextComponentType = () => {
  return (
    <section id='featured'>
      <img className={styles.waves} src='/images/heronavigacija.png' alt='Spilled coffee'/>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'></div>
          <div className={`col-11 ${styles.content}`}>
            <h1>Coffee Grain Studios <br/> Creative agency</h1>
            <p>
              Coffee grains studio is a creative agency created by ambitious, resourceful friends 
              from different digital fields who came together to work on new projects.
            </p>
            <a href="#contact">
              <button>
                Get in touch &rarr;
              </button>
            </a>
          </div>
        </div>
        <a className='row' href='#projects'>
          <img className={`mx-auto ${styles.scrollDown}`} src="/images/scrollDown.svg" alt="Scroll down" />
        </a>
      </div>
    </section>
  )
}