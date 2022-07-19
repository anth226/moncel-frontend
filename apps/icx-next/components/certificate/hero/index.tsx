import SidebarCTA from 'components/sidebar-cta';
import { ComponentIccAdditionalHero, ComponentCoreText } from 'generated/strapi-types';

const CertificateHero2 = ({ data }: { data: ComponentIccAdditionalHero }) => {
    return <div className="container">
        <div className="row">
            <div className="col-12 col-md-7 col-lg-8">
                <h1 className="mb-4 text-center text-md-start">{data.title}</h1>
                <ul className="list-container">
                {(data.HeroList || []).map((listItem: ComponentCoreText | null, i: number) => {
                    if(!listItem) return null;
                    return <li key={`hero-list-item-${i}}`} className="mb-3">
                        {listItem.text}
                    </li>;
                })}
                </ul>
            </div>
            <div className="col-12 col-md-5 col-lg-4 d-none d-md-flex justify-content-end">
                <SidebarCTA data={data} />
            </div>
        </div>
    </div>
}
export default CertificateHero2;
