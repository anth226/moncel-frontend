import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

import { ComponentIccLayoutFooter } from "generated/strapi-types";

const Footer = ({ data }: { data: ComponentIccLayoutFooter}) => {
    const logo = data.logo?.data?.attributes?.url || "";

    const { NavLinks: navLinks, LegalLinks: legalLinks, Copyright: copyright } = data;

    return <div className="footer">
        <nav className="container">

            <div className="row mb-3 d-flex align-items-center">
                <div className="col-12 col-md-3 text-center text-md-start mb-3 mb-md-0">
                    <Link href="/" passHref><a><Image src={logo} width={179} height={32} layout="fixed" alt="footer-logo" /></a></Link>
                </div>
                <div className="col-12 col-md-9 text-center text-md-end">
                    <div className={styles.linksTop}>
                        {( navLinks || []).map(link => {
                            if(!link) return null;
                            return <Link href={link.href} key={`footer-navigation-${link.text}`}>{link.text}</Link>
                        })}
                    </div>

                </div>
            </div>
            <div className="row text-center text-md-start">
                <p>{copyright}</p>
                <div className={styles.linksBottom}>
                    {(legalLinks || []).map(link => {
                        if(!link) return null;
                        return <Link href={link.href} key={`footer-terms-${link.text}`}>{link.text}</Link>
                    })}
                </div>
            </div>
        </nav>
    </div>;
};

export default Footer;
