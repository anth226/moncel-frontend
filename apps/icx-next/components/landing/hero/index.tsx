import { useMediaQuery } from 'react-responsive'
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    const isTablet = useMediaQuery({
        query: '(max-width: 768px)'
    });

    const imageDimensions = isTablet ? [270, 240] : [350, 311];

    return <div className="container">
        <div className="row align-items-center px-4 px-sm-0">
        <div className="col-12 col-md-7 col-lg-6 py-0 py-md-8 text-center text-md-start">
            <h1 className="text-white pb-4">Get your <span className="text-primary">Food Handler Certificate</span> online</h1>
            <Link href='/food-handler-certificate' passHref><div className="btn btn-primary text-white">Learn More</div></Link>
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