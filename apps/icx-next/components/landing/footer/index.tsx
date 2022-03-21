import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

import { Navigation } from './types';

const Footer = ({ footer }: { footer: any}) => {
    const logo = footer.logo?.image;
    const { navigation, copyright, terms } = footer;
    // this should happen server side
    if(!logo || !(footer.navigation instanceof Array)) {
        // data is missing so fail build
        // throw Error('Footer CMS data failed shape validation'); 
    }

    return <div className={styles.container}>
        <div className={styles.top}>
            <Image src={footer.logo?.image} width={179} height={32} layout="fixed" />
            <div className={styles.links}>
                {navigation.map((link: Navigation) => {
                    return <Link href={link.url} key={`footer-navigation-${link.label}`}>{link.label}</Link>
                })}
            </div>
        </div>
        <div className={styles.middle}>
            <p>{copyright}</p>
        </div>
        <div className={styles.bottom}>
            {terms.map((link: Navigation) => {
                return <Link href={link.url} key={`footer-terms-${link.label}`}>{link.label}</Link>
            })}
        </div>
    </div>
};

export default Footer;
