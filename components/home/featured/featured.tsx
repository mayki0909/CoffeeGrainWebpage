import { NextComponentType } from 'next';
import styles from './featured.module.css';


export const Featured: NextComponentType = () => {
  return (
    <section id='featured'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'></div>
          <div className={`col-11 ${styles.content}`}>
            <h1>Coffee Grain Studios <br/> Creative agency</h1>
            <p>
              Coffee grains studio is a creative agency created by ambitious, resourceful friends 
              from different digital fields who came together to work on new projects.
            </p>
            <a href="#footer">
              <button>
                Get in touch &rarr;
              </button>
            </a>
          </div>
        </div>
      </div>
      <img className={styles.coffee} src='/images/SpilledCoffee.jpg' alt='Spilled coffee'/>
    </section>
  )
}