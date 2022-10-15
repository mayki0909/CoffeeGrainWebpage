import { NextComponentType } from 'next';
import { TeamMember } from './team-member';
import styles from './team.module.css';


export const Team: NextComponentType = () => {

  return (
    <section id='team'>
      <div className='container'>
        <div className='row'>
          <h2 className={styles.heading}>MEET THE TEAM</h2>
          <TeamMember name='Miha Znidar' title='Professional singer / Drifter / Newspapers seller' image='/images/TeamMember.png' />
          <TeamMember name='Name Surname' title='Professional singer / Drifter / Newspapers seller' image='/images/TeamMember.png' />
          <TeamMember name='SANDI SLJADOLJERDAR' title='Professional singer / Drifter / Newspapers seller' image='/images/TeamMember.png' />
        </div>
      </div>
    </section>
  )
}