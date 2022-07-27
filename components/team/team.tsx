import { NextComponentType } from 'next';
import { useState } from 'react';
import styles from './team.module.css';


export const Team: NextComponentType = () => {

  return (
    <section id='team'>
      <div  className='backgroundBrown'>
        <div className='wave'></div>
        {/* <div className='spacer wave3'></div> */}
        <div className='container '>
        <div className='row'>
          <h2 className={styles.heading}>TEAM</h2>
          <div className='col-md-6 col-lg-4'>
            <div className={styles.card}>
              <img className={styles.teamImage} src="/images/Miha.webp" alt="Miha Žnidar" />
              <p className={styles.name}>Name Surname</p>
              <p className={styles.title}>FULL STACK</p>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className={styles.card}>
              <img className={styles.teamImage} src="/images/Miha.webp" alt="Miha Žnidar" />
              <p className={styles.name}>Name Surname</p>
              <p className={styles.title}>FULL STACK</p>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className={styles.card}>
              <img className={styles.teamImage} src="/images/Miha.webp" alt="Miha Žnidar" />
              <p className={styles.name}>Name Surname</p>
              <p className={styles.title}>FULL STACK</p>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className={styles.card}>
              <img className={styles.teamImage} src="/images/Miha.webp" alt="Miha Žnidar" />
              <p className={styles.name}>Name Surname</p>
              <p className={styles.title}>FULL STACK</p>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className={styles.card}>
              <img className={styles.teamImage} src="/images/Miha.webp" alt="Miha Žnidar" />
              <p className={styles.name}>Name Surname</p>
              <p className={styles.title}>FULL STACK</p>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className={styles.card}>
              <img className={styles.teamImage} src="/images/Miha.webp" alt="Miha Žnidar" />
              <p className={styles.name}>Name Surname</p>
              <p className={styles.title}>FULL STACK</p>
            </div>
          </div>
        </div>
        </div>
        {/* <div className='spacer wave3 flip'></div> */}
        <div className='wave flip'></div>
      </div>
    </section>
  )
}