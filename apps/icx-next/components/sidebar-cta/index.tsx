import Link from 'next/link';
import styles from './styles.module.scss';

// god i really hate how this is implemented in storyblok
const Sidebar = () => {

    return <div className={styles.container}>
        <h1>Food Handler Certificate</h1>
        <ul className="square-list">
            <li>100% online</li>
            <li>Same-day certification</li>
            <li>Unlimited 30-day access</li>
            <li>{'All notes & course materials'}</li>
            <li>Free exam retakes</li>
        </ul>
        <h1 className={styles.price}>$49</h1>
        <div className={styles.btn}>
            <Link href="https://my.instacert.ca/urlcheckout/add?product=7&amp;qty=1">REGISTER NOW</Link>
        </div>
        
    </div>
};

export default Sidebar;