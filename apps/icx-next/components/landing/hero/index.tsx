import { useMediaQuery } from 'react-responsive'
import Image from 'next/image';


import styles from './styles.module.scss';

const Hero = () => {
    const isMobile = useMediaQuery({
        query: '(max-width: 575px)'
    });

    const isTablet = useMediaQuery({
        query: '(max-width: 768px)'
    });

    const imageDimensions = isTablet ? [270, 240] : [350, 311];

    return <div className={styles.container}><div className={styles['hero-bg']} />
        <div className={styles.hero}>
        <div className={styles['hero-left']}>
            <h1>Get your <span className={styles.highlight}>Food Handler Certificate</span> online</h1>
            <h1 className={styles.clickable}>
            <a 
                href="https://my.instacert.ca/urlcheckout/add?product=7&qty=1"
                className={styles.highlight}
                target="_blank"
                rel="noreferrer">Register now</a></h1>
        </div>
        { isTablet ? null : <div className={styles['hero-right']}>

            <div style={{
                width: imageDimensions[0],
                height: imageDimensions[1],
            }}><Image src="/icc-value.png" alt="icc-value-graphic" width={350} height={311} /></div>
        </div> }
        </div>
    </div>
}

export default Hero;