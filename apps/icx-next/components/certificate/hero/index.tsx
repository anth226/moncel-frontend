import Image from 'next/image';
import { StoryBlokCertificateHeroContent, ComponentListItem } from 'moncel-one-sdk/cdn/types';

import styles from './styles.module.scss';

const CertificateHero2 = ({ hero }: { hero: StoryBlokCertificateHeroContent }) => {
    const heroListItems = hero.body?.[0]?.list_items;
    return <div className={styles['hero-secondary']}>
        <div className={styles.content}>
            <h1>{hero.title}</h1>
            <ul>
            {heroListItems.map((listItem: ComponentListItem, i) => {
                return <li key={`hero-list-item-${i}}`}>
                    <Image src={"/icons/check-black.svg"} height={18} width={18} layout="fixed" alt={`hero-list-item-${i}}-icon`}/>
                    {listItem.text}
                </li>
            })}
            </ul>
        </div>
    </div>
}
export default CertificateHero2;