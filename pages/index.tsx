import type { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from '../components/navbar/navbar';
import { Professions } from '../components/professions/professions';
import { Projects } from '../components/projects/projects';
import { Team } from '../components/team/team';
import { Contact } from '../components/contact/contact';
import { Footer } from '../components/foooter/footer';
import { Featured } from '../components/featured/featured';

const Home: NextPage = () => {
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
        <Contact />
        <Professions />
        <Projects />
        <Team />
        <Footer />
      </main>
    </>
  )
}

export default Home
