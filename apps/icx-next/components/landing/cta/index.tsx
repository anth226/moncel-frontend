import Link from 'next/link';
import styles from './styles.module.scss';

const CtaSection = () => {
    return <div className={styles.container}>
        <h1>Get your Food Handler Certificate in <span className={styles.highlight}>as little as 8 hours!</span></h1>
        <Link href="/food-handler-certificate" passHref>
            <div className={styles['button-wrapper']}>
                <p className={styles.button}>LEARN MORE</p>
            </div>
        </Link>
    </div>
};

export default CtaSection;