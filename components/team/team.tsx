import { NextComponentType } from 'next';
import { useState } from 'react';
import styles from './team.module.css';


export const Team: NextComponentType = () => {

  return (
    <section id='team'>
      <div className='container'>
        <div className='row'>
          <h2 className={styles.heading}>MEET THE TEAM</h2>
          <div className='col-md-6 col-lg-4'>
            <img className={styles.teamImage} src="/images/TeamMember.png" alt="Miha Žnidar" />
            <p className={styles.name}>Name Surname</p>
            <p className={styles.title}>Professional singer / Drifter / Newspapers seller</p>
          </div>
          <div className='col-md-6 col-lg-4'>
            <img className={styles.teamImage} src="/images/TeamMember.png" alt="Miha Žnidar" />
            <p className={styles.name}>Name Surname</p>
            <p className={styles.title}>Professional singer / Drifter / Newspapers seller</p>
          </div>
          <div className='col-md-6 col-lg-4'>
            <img className={styles.teamImage} src="/images/TeamMember.png" alt="Miha Žnidar" />
            <p className={styles.name}>SANDI SLJADOLJERDAR</p>
            <p className={styles.title}>Professional singer / Drifter / Newspapers seller</p>
          </div>
        </div>
      </div>
    </section>
  )
}