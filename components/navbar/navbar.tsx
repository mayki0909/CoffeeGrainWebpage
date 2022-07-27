import { NextComponentType } from 'next';
import { useState } from 'react';
import styles from './navbar.module.css';


export const Navbar: NextComponentType = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.navbar}>
      <nav className={`d-none d-lg-flex justify-content-center`}>
        <img className={styles.navLogo} src="/images/LogoBlack.webp" alt="Coffee Grain Studios logo" />
        <a className={styles.desktopNavItem} href="#about">ABOUT</a>
        <a className={styles.desktopNavItem} href="#projects">PROJECTS</a>
        <a className={styles.desktopNavItem} href="#team">TEAM</a>
        <a className={styles.desktopNavItem} href="#contact">CONTACT</a>
      </nav>
        <hr className={`d-none d-lg-flex justify-content-center ${styles.white}`}/>

      <nav className={`d-flex d-lg-none ${styles.mobileNavToggle}`}>
          <svg onClick={()=>setOpen(!open)} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-menu-up" viewBox="0 0 16 16">
            <path d="M7.646 15.854a.5.5 0 0 0 .708 0L10.207 14H14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.793l1.853 1.854zM1 9V6h14v3H1zm14 1v2a1 1 0 0 1-1 1h-3.793a1 1 0 0 0-.707.293l-1.5 1.5-1.5-1.5A1 1 0 0 0 5.793 13H2a1 1 0 0 1-1-1v-2h14zm0-5H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2zM2 11.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 0-1h-8a.5.5 0 0 0-.5.5zm0-4a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5zm0-4a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5z"/>
          </svg>
      </nav>      
      {open && (
        <div className={`nav flex-column d-lg-none ${styles.mobileNav}`}>
          <a className={styles.mobileNavItem} href="#about">ABOUT</a>
          <a className={styles.mobileNavItem} href="#projects">PROJECTS</a>
          <a className={styles.mobileNavItem} href="#team">TEAM</a>
          <a className={styles.mobileNavItem} href="#contact">CONTACT</a>
        </div>
      )}
    </div>
  )
}