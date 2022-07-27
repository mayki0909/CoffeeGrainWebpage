import { NextComponentType } from 'next';
import styles from './featured.module.css';


export const Featured: NextComponentType = () => {
  return (
    <section id='featured'>
      <img className={styles.waves} src='/images/heronavigacija.png' alt='Spilled coffee'/>
      <div className='container'>
        <div className='row'>
          <div className={`col-8 ${styles.content}`}>
            {/* <img className={styles.logoBig} src={'/images/LogoBlack.webp'} alt='Coffee Grain Studios logo'/> */}
            <h1>Poljita Kahfah</h1>
            <p>
              There is a theory which states that if ever anyone discovers exactly what 
              the Universe is for and why it is here, it will instantly disappear and be 
              replaced by something even more bizarre and inexplicable. There is another 
              theory which states that this has already happened.
            </p>
            <button>
              Get in touch
            </button>
          </div>
        </div>
        <div className='row'>
          <img className={`mx-auto ${styles.scrollDown}`} src="/images/scrollDown.svg" alt="Scroll down" />
        </div>
      </div>
    </section>
  )
}