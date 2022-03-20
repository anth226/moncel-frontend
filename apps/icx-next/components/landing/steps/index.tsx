import Image from 'next/image'

import styles from './styles.module.css'

const StepsSection = () => {
    return <div className={styles.container}>
        <h1 className={styles.step1}>3 easy steps</h1>
        <div className={styles.step}>
            <Image alt="register-icon" src="/icons/register-1.svg" width={90} height={90} layout="fixed" />
            <p>Get immediate online access</p>
        </div>
        <div className={styles.step}>
            <Image alt="register-icon" src="/icons/register-1.svg" width={90} height={90} layout="fixed" />
            <p>{"You'll be done in as little as 8 hours"}</p>
        </div>
        <div className={styles.step}>
            <Image alt="register-icon" src="/icons/register-1.svg" width={90} height={90} layout="fixed" />
            <p>Your certificate will be emailed in minutes</p>
        </div>
    </div>
}

export default StepsSection;