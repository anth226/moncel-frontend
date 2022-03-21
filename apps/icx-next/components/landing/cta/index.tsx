import styles from './styles.module.scss';

const CtaSection = () => {
    return <div className={styles.container}>
        <h1>Get your Food Handler Certificate in <span className={styles.highlight}>as little as 8 hours!</span></h1>
        <div className={styles.button}>Learn more</div>
    </div>
};

export default CtaSection;