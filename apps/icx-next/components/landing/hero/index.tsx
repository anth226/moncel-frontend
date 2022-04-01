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

    return <div className="container">
        <div className="row align-items-center px-4 px-sm-0">
        <div className="col-12 col-md-7 col-lg-6 py-5 py-md-8">
            <h1 className="text-white">Get your <span className="text-primary">Food Handler Certificate</span> online</h1>
            <a 
                href="/food-handler-certificate"
                className={styles.highlight}
                rel="noreferrer">
                    <div className="btn btn-primary mt-4">Learn More</div>
            </a>
        </div>
        { isTablet ? null : <div className={'col-12 col-md-5 col-lg-4 offset-lg-2 d-none d-md-block'}>

            <div style={{
                width: imageDimensions[0],
                height: imageDimensions[1],
            }}><Image src="/icc-value.png" alt="icc-value-graphic" width={350} height={311} /></div>
        </div> }
        </div>
    </div>
}

export default Hero;