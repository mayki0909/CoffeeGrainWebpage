import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/navbar/navbar';
import { Professions } from '../components/professions/professions';
import { Projects } from '../components/projects/projects';
import { Team } from '../components/team/team';
import { Contact } from '../components/contact/contact';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        {/* TODO SEO AND METADATA */}
        <title>Coffee Grain Studios</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name='description' content='Coffee Grain Studios is digital agency, created by ex-classmates from Slovenia. It includes people with different skillset from digital space.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <img className={styles.waves} src='/images/Waves.svg' alt='Spilled coffee'/>
      <div className='container'>
        <Navbar />
        <div>
          <div className='row'>
            <div className='col-8'>
              <img className={styles.logoBig} src={'/images/LogoBlack.png'} />
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Professions />
      <Projects />
      <Team />
    
      <main className={styles.main}>
        <h1 className={styles.title}>
          Website is under construction!
        </h1>
        <iframe src="https://giphy.com/embed/q0eh4TU8OMXRu" width="264" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/q0eh4TU8OMXRu">via GIPHY</a></p>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}

export default Home
