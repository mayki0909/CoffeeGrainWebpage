import Head from 'next/head'
import type { NextPage } from 'next'
import { Navbar } from '../components/home/navbar/navbar';
import { Featured } from '../components/home/featured/featured';
import { Projects } from '../components/home/projects/projects';
import { Professions } from '../components/home/professions/professions';
import { Services } from '../components/home/services/services';
import { Team } from '../components/home/team/team';
import { Footer } from '../components/home/foooter/footer';

const Home: NextPage = () => {
  // const [scroll, setScroll] = useState(0);
  // function scrolling() {
  //   const waves = document.getElementsByClassName('wave')
  //   const waveBottom = document.getElementsByClassName('waveBottom')
  //   Array.from(waves).forEach(wave=>wave.className='wave visible')
  //   Array.from(waveBottom).forEach(wave=>wave.className='waveBottom visible')
  //   setScroll(window.scrollY)
  // }
  // useEffect(() => {
  //   window.addEventListener('scroll', scrolling , false);
  // })
  // useEffect(() => {
  //   const timeout = setTimeout(()=>{},100)
  //   return () => {
  //     clearTimeout(timeout)
  //     const waves = document.getElementsByClassName('wave')
  //     const waveBottom = document.getElementsByClassName('waveBottom')
  //     Array.from(waves).forEach(wave=>wave.className='wave hidden')
  //     Array.from(waveBottom).forEach(wave=>wave.className='waveBottom hidden')
  //   }
  // }, [scroll])


  return (
    <>
      <Head>
        {/* TODO SEO AND METADATA */}
        <meta charSet='UTF-8' />
        <meta httpEquiv='content-language' content='en'></meta>
        <title>Coffee Grain Studios - Digital agency</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Coffee Grain Studios is digital agency, created by ex-classmates from Slovenia. It includes people with different skillset from digital space.' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='manifest' href='/manifest.json'></link>
      </Head>

      <main>
        <Navbar />
        <Featured />
        <Projects />
        <Services />
        <Footer />
      </main>
    </>
  )
}

export default Home
