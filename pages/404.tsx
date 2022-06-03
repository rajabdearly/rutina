/* eslint-disable @next/next/no-img-element */
import styles from '../styles/404.module.css';

export default function Custom404() {
    return (
        <div className={styles.message}>
            <div className={styles.text}><img src='/sad-face.svg' className={styles.icon} alt="oops"/> - Упс, по ходу мы не нашли то, что вы искали!</div>
        </div>
    );
}