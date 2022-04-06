import { useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { StoryBlokHeader } from 'moncel-one-sdk/cms/types';

const Header = ({ header }: { header: StoryBlokHeader }) => {
    const [expanded] = useState(false);
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    });

    return <div className="bg-dark">
        <nav className="container py-4">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <Image src={header.logo.image} alt="icx-logo" width={160} height={30} />
                </div>
                {/* Desktop links */}
                {isMobile ? null : <div>
                    {header.navigation.map(link => {
                        return <a className={`text-white ms-4 ${link.class}`} key={`header-link-${link.label}}`} href={link.url}>{link.label.toUpperCase()}</a>
                    })}
                </div>
                }

                {/* Mobile dropdown */}
                {isMobile ?
                    (<button className="navbar-toggler px-0 py-0" aria-expanded={expanded} aria-label="Toggle header navigation">
                        <FontAwesomeIcon className="mobile-menu" icon={faBars} />
                    </button>)
                    : null}
            </div>
        </nav>
    </div>

};

export default Header;
