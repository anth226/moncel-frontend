import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

import { StoryBlokFooter } from 'moncel-one-sdk/cms/types';

const Footer = ({ footer }: { footer: StoryBlokFooter}) => {
    const logo = footer.logo?.image;
    const { navigation, copyright, terms } = footer;

    return <div className="footer">
        <nav className="container">

            <div className="row mb-3 d-flex align-items-center">
                <div className="col-12 col-md-3 text-center text-md-start mb-3 mb-md-0">
                    <a href="/"><Image src={logo} width={179} height={32} layout="fixed" alt="footer-logo" /></a>
                </div>
                <div className="col-12 col-md-9 text-center text-md-end">
                    <div className={styles.linksTop}>
                        {navigation.map((link) => {
                            return <Link href={link.url} key={`footer-navigation-${link.label}`}>{link.label}</Link>
                        })}
                    </div>

                </div>
            </div>
            <div className="row text-center text-md-start">
                <p>{copyright}</p>
                <div className={styles.linksBottom}>
                    {terms.map((link) => {
                        return <Link href={link.url} key={`footer-terms-${link.label}`}>{link.label}</Link>
                    })}
                </div>
            </div>
        </nav>
    </div>
        
      
};

export default Footer;
