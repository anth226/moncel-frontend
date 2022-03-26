import Image from 'next/image';

import { StoryBlokHeader } from 'moncel-one-sdk/cms/types';
import styles from './styles.module.scss';

const Header = ({ header }: { header: StoryBlokHeader}) => {

    return <div>
        <div className={styles['header-bg']} />
        <div className={styles.header}>
        <div className={styles.logo}>
            <Image src={header.logo.image} alt="icx-logo" width={160} height={30} />
        </div>
        <div>
            { header.navigation.map((link, i) => {
            return <a key={`header-link-${link.label}}`} href={link.url}>{link.label}</a>
            })}
        </div>
        </div>
    </div>;
};

export default Header;
