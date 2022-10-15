import styles from './team-member.module.css';

type Props = {
    name: string,
    title: string,
    image: string
}

export const TeamMember = ({ name, title, image }: Props) => {

    return (
        <div className='col-md-6 col-lg-4'>
            <img className={styles.image} src={image} alt={name} />
            <p className={styles.name}>{name}</p>
            <p className={styles.title}>{title}</p>
        </div>
    )
}