import styles from './services.module.css';

interface ServiceProp {
  title: string;
  text: string;
  icon: string;
}

export const Service = (props: ServiceProp) => {
  return (
    <div className='col-12 col-md-6'>
      <div className='row'>
        <div className='col-2'>
          <img className={styles.icon} src={props.icon} alt={props.title} />
        </div>
        <div className='col-10'>
          <h3 className={styles.h3}>{props.title}</h3>
        </div>
      </div>
      <p className={styles.textSmall}>{props.text}</p>
    </div>
  )
}