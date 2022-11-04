import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import ScreenSizeContext from '../context/screenSize';

function MyApp({ Component, pageProps }: AppProps) {
  const [size, setSize] = useState('xs');

  const getWidthSize = () => {
    if (window.innerWidth < 576) return setSize('xs')
    if (576 <= window.innerWidth && window.innerWidth < 768) return setSize('sm')
    if (768 <= window.innerWidth && window.innerWidth < 992) return setSize('md')
    if (992 <= window.innerWidth && window.innerWidth < 1200) return setSize('lg')
    if (992 <= window.innerWidth && window.innerWidth < 1200) return setSize('xl')
    if (992 <= window.innerWidth && window.innerWidth < 1200) return setSize('xxl')
  }
  
  useEffect(() => {
    // Boostrap import
    if (typeof document !== undefined) require('bootstrap/dist/js/bootstrap')

    // Get screen size
    getWidthSize()
    // Get screen size on resize
    window.addEventListener('resize', ()=> {
      getWidthSize()
    })
    
  }, []);
  
  return (
    <ScreenSizeContext.Provider value={size}>
      <Component {...pageProps} />
    </ScreenSizeContext.Provider>
  )
}

export default MyApp
