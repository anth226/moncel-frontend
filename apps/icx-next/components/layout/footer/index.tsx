import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

import { StoryBlokFooter } from 'moncel-one-sdk/cms/types';

const Footer = ({ footer }: { footer: StoryBlokFooter}) => {
    const logo = footer.logo?.image;
    const { navigation, copyright, terms } = footer;

    return <div className={styles.container}>
        <div className={styles.top}>
            <Image src={footer.logo?.image} width={179} height={32} layout="fixed" alt="footer-logo" />
            <div className={styles.links}>
                {navigation.map((link) => {
                    return <Link href={link.url} key={`footer-navigation-${link.label}`}>{link.label}</Link>
                })}
            </div>
        </div>
        <div className={styles.middle}>
            <p>{copyright}</p>
        </div>
        <div className={styles.bottom}>
            {terms.map((link) => {
                return <Link href={link.url} key={`footer-terms-${link.label}`}>{link.label}</Link>
            })}
        </div>
    </div>
};

export default Footer;
