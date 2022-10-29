import styles from './project.module.css';

type Props = {
    title: string,
    name: string,
    description: string,
    projectLink: string,
    imageLink: string
}

export const Project = ({title, name, description, projectLink, imageLink}: Props) => {
    return (
        <div className='row gy-5'>
          <div className='col-sm-6 p-3'>
            <p className={styles.projectName}>{name}</p>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <a className={styles.button} href={projectLink}>
              View the project
            </a>
          </div>
          <div className='col-sm-6 p-3'>
            <img className={styles.image} src={imageLink} alt='Projects featured image' />
          </div>
        </div>
    )
}