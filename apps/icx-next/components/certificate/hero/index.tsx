import { StoryBlokCertificateHeroContent, ComponentListItem } from 'moncel-one-sdk/cms/types';
import SidebarCTA from 'components/sidebar-cta';

const CertificateHero2 = ({ hero }: { hero: StoryBlokCertificateHeroContent }) => {
    const heroBody = hero.body?.[0] || {};
    const heroListItems = ("list_items" in heroBody) ? heroBody.list_items : [];
    return <div className="container">
        <div className="row">
            <div className="col-12 col-md-7 col-lg-8">
                <h1 className="mb-4 text-center text-md-start">{hero.title}</h1>
                <ul className="list-container">
                {heroListItems.map((listItem: ComponentListItem, i) => {
                    return <li key={`hero-list-item-${i}}`} className="mb-3">
                        {listItem.text}
                    </li>
                })}
                </ul>
            </div>
            <div className="col-12 col-md-5 col-lg-4 d-none d-md-block">
                <SidebarCTA />
            </div>
        </div>
    </div>
}
export default CertificateHero2;
