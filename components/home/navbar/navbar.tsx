import { NextComponentType } from 'next';
import { useState } from 'react';
import styles from './navbar.module.css';


export const Navbar: NextComponentType = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.navbar}>
      <nav className={`d-none d-lg-flex justify-content-center`}>
        <img className={styles.navLogo} src="/images/LogoBlack.webp" alt="Coffee Grain Studios logo" />
        <a className={styles.desktopNavItem} href="#services">ABOUT</a>
        <a className={styles.desktopNavItem} href="#projects">PROJECTS</a>
        <a className={styles.desktopNavItem} href="#footer">CONTACT</a>
      </nav>

      <nav className={`d-flex justify-content-between d-lg-none ${styles.mobileNavToggle}`}>
        <img className={styles.mobileLogo} src="/images/LogoBlack.webp" alt="Coffee Grain Studios logo" />
        <button className={styles.mobileBurger} onClick={()=>setOpen(!open)}>
          <img src="/icons/burger.svg" alt="Burger menu" />
        </button>
      </nav>      
      {open && (
        <div className={`nav flex-column d-lg-none ${styles.mobileNav}`}>
          <div className='d-flex justify-content-between'>
            <img className={styles.mobileLogo} src="/images/LogoWhite.webp" alt="Coffee Grain Studios logo" />
            <button className={styles.mobileBurger} style={{backgroundColor: '#fff'}} onClick={()=>setOpen(!open)}>
              <img src="/icons/close.svg" alt="Burger menu" />
            </button>
          </div>
          <a className={styles.mobileNavItem} href="#services" onClick={()=>setOpen(!open)}>About</a>
          <a className={styles.mobileNavItem} href="#projects" onClick={()=>setOpen(!open)}>Projects</a>
          <a className={styles.mobileNavItem} href="#footer" onClick={()=>setOpen(!open)}>Contact</a>
        </div>
      )}
    </div>
  )
}