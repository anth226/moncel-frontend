import Image from 'next/image';
import { StoryBlokCertificateHeroContent, ComponentListItem, ComponentList } from 'moncel-one-sdk/cms/types';

import styles from './styles.module.scss';

const CertificateHero2 = ({ hero }: { hero: StoryBlokCertificateHeroContent }) => {
    // this is bad. please add a slug or type name in storyblok to make this suck less
    /* eslint-disable no-unsafe-optional-chaining */
    const text1 = ("text" in hero.body?.[0] || {}) ? (hero.body?.[0] as ComponentListItem).text : "";
    const heroListItems = ("list_items" in (hero.body?.[1] || {})) ? (hero.body?.[1] as ComponentList).list_items : [];
    const text2 = ("text" in hero.body?.[2] || {}) ? (hero.body?.[2] as ComponentListItem).text : ""; 
    /* eslint-enable no-unsafe-optional-chaining */
    return <div className={styles['hero-secondary']}>
        <div className={styles.content}>
            <h1>{hero.title}</h1>
            <p>{text1}</p>
            <ul>
            {heroListItems.map((listItem: ComponentListItem, i) => {
                return <li key={`hero-list-item-${i}}`}>
                    <Image src={"/icons/check-black.svg"} height={18} width={18} layout="fixed" alt={`hero-list-item-${i}}-icon`}/>
                    {listItem.text}
                </li>
            })}
            </ul>
            <p>{ text2 }</p>
        </div>
    </div>
}
export default CertificateHero2;
