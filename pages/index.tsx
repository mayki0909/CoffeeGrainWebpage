import Head from 'next/head'
import type { NextPage } from 'next';
import { Navbar } from '../components/home/navbar/navbar';
import { Featured } from '../components/home/featured/featured';
import { Projects } from '../components/home/projects/projects';
import { Services } from '../components/home/services/services';
import { Footer } from '../components/home/foooter/footer';

const Home: NextPage = () => {
  
  const metadata = {
    title: 'Coffee Grain Studios - Digital agency',
    description: 'Coffee Grain Studios is digital agency, created by ex-classmates from Slovenia. It includes people with different skillset from digital space.',
    url: 'https://coffee-grain-webpage.vercel.app',
    imageUrl: '/images/LogoBlack.png'
  }

  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='content-language' content='en' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='manifest' href='/manifest.json' />
  
        {/* Primary Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={`${metadata.url}${metadata.imageUrl}`} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={metadata.url} />
        <meta property="twitter:title" content={metadata.title} />
        <meta property="twitter:description" content={metadata.description} />
        <meta property="twitter:image" content={`${metadata.url}${metadata.imageUrl}`} />
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
