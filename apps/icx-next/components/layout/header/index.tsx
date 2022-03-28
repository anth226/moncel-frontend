import { useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { StoryBlokHeader } from 'moncel-one-sdk/cms/types';
import styles from './styles.module.scss';

const Header = ({ header }: { header: StoryBlokHeader}) => {
    const [ expanded, setExpanded ] = useState(false);
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    });

    return <nav className={styles.container}>
        <div className={styles['header-bg']} />
        <div className={styles.header}>
            <div className={styles.logo}>
                <Image src={header.logo.image} alt="icx-logo" width={160} height={30} />
            </div>
            {/* Desktop links */}
            { isMobile ? null : <div>
                { header.navigation.map((link, i) => {
                return <a key={`header-link-${link.label}}`} href={link.url}>{link.label}</a>
                })}
            </div>
            }

            {/* Mobile dropdown */}
            { isMobile ? 
                <button className="navbar-toggler px-0 py-0" aria-expanded={false} aria-label="Toggle header navigation">
                    <FontAwesomeIcon className={styles.hamburger} icon={faBars} />
                </button>
            

             : null }
        </div>
    </nav>;
};

export default Header;
