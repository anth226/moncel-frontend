import Image from 'next/image';
import { StoryBlokCertificateHeroContent, ComponentListItem } from 'moncel-one-sdk/cms/types';

import styles from './styles.module.scss';

const CertificateHero2 = ({ hero }: { hero: StoryBlokCertificateHeroContent }) => {
    const heroBody = hero.body?.[0] || {};
    const heroListItems = ("list_items" in heroBody) ? heroBody.list_items : [];
    return <div className={styles['hero-secondary']}>
        <div className={styles.content}>
            <div className={styles.column}>
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
    </div>
}
export default CertificateHero2;
