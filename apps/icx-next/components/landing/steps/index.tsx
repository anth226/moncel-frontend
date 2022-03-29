import Image from 'next/image'

import styles from './styles.module.scss'

const StepsSection = () => {
    return <div className={styles.container}>
        <h2 className={styles.step1}>3 easy steps</h2>
        <div className={styles.step}>
            <Image alt="register-icon" src="/icons/register-1.svg" width={90} height={90} layout="fixed" />
            <h5>Register</h5>
            <p>Get immediate online access</p>
        </div>
        <div className={styles.step}>
            <Image alt="register-icon" src="/icons/complete-2.svg" width={90} height={90} layout="fixed" />
            <h5>Complete</h5>
            <p>{"You'll be done in as little as 8 hours"}</p>
        </div>
        <div className={styles.step}>
            <Image alt="register-icon" src="/icons/certified-3.svg" width={90} height={90} layout="fixed" />
            <h5>Print</h5>
            <p>Your certificate will be emailed in minutes</p>
        </div>
    </div>
}

export default StepsSection;