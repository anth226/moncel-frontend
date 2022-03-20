import styles from './styles.module.css'

const PricingSection = () => {

    return <div className={styles.container}>
        <div className={`${styles.column} ${styles.left}`}>
            <h1>No hidden fees</h1>
            <h1 className={styles.highlight}>$49</h1>
            <h3>{"It's never been easier to get your food handler certificate"}</h3>
            {/* Button link to /food-handler-certificated */}
        </div>
        <div className={`${styles.column} ${styles.right}`}>
            <ul>
                <li>100% Online</li>
                <li>Same-day certification</li>
                <li>Unlimited 30-day access</li>
                <li>Official digital certificate</li>
            </ul>
        </div>
    </div>
}

export default PricingSection;
