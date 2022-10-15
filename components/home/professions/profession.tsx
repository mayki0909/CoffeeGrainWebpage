import styles from './profession.module.css';

type Props = {
    title: string,
    description: string,
    image: string
}

export const Profession = ({title, description, image}: Props) => {
    return (
        <div className='col-xs-12 col-lg-4'>
            <div className={styles.card}>
                <img className={styles.image} src={image} />
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
}