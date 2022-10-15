import styles from './wave.module.css';

type Props = {
    upsideDown?: boolean
}

export const Wave = ({upsideDown}: Props) => {
    return (
        <div className={upsideDown ? styles.upsideDownWave : styles.wave}></div>
    )
}