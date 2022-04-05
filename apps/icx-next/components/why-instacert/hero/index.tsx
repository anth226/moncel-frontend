import { StoryBlokCertificateHeroContent, ComponentListItem, ComponentList } from 'moncel-one-sdk/cms/types';
import SidebarCTA from 'components/sidebar-cta';

const CertificateHero2 = ({ hero }: { hero: StoryBlokCertificateHeroContent }) => {
    // this is bad. please add a slug or type name in storyblok to make this suck less
    /* eslint-disable no-unsafe-optional-chaining */
    const text1 = ("text" in hero.body?.[0] || {}) ? (hero.body?.[0] as ComponentListItem).text : "";
    const heroListItems = ("list_items" in (hero.body?.[1] || {})) ? (hero.body?.[1] as ComponentList).list_items : [];
    const text2 = ("text" in hero.body?.[2] || {}) ? (hero.body?.[2] as ComponentListItem).text : ""; 
    /* eslint-enable no-unsafe-optional-chaining */
    return <div className="container">
        <div className="row">
            <div className="col-12 col-md-7 col-lg-8">
                <h1 className="mb-4">{hero.title}</h1>
                <p>{text1}</p>
                <ul className="list-container">
                {heroListItems.map((listItem: ComponentListItem, i) => {
                    return <li key={`hero-list-item-${i}}`} className="mb-3">
                        
                        {listItem.text}
                    </li>
                })}
                </ul>
                <p>{ text2 }</p>
            </div>
            <div className="col-12 col-md-5 col-lg-4 d-none d-md-block">
                <SidebarCTA />
            </div>
        </div>
    </div>
}
export default CertificateHero2;
