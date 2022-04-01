import Link from 'next/link';
import styles from './styles.module.scss';

const CtaSection = () => {
    return <div className="container">
        <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start">
                <h2 className="text-white max-w-lg cta">Get your Food Handler Certificate in <span className="text-primary">as little as 8 hours!</span></h2>
            </div>
            <div className="col-12 offset-0 col-md-4 offset-md-2 text-center text-md-end pb-0 pt-3 pt-md-0">
                <Link href="/food-handler-certificate" passHref>
                    <div className="btn btn-primary">
                        <p className="mb-0">LEARN MORE</p>
                    </div>
                </Link>
            </div>

        </div>
        
    </div>
};

export default CtaSection;