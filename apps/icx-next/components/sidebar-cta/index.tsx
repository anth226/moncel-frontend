import Link from 'next/link';
import { useScrollPosition } from './scroll.js'
import { ComponentIccAdditionalHero, ComponentCoreText } from 'generated/strapi-types';

interface Point {
    readonly currPos: { x: number; y: number };
}

const Sidebar = ({ data }: { data: ComponentIccAdditionalHero }) => {

    useScrollPosition(( { currPos }:Point ) => {
        const sidebar = document.getElementById('sidebar-cta')!;
        const position = currPos.y;

        if (position <= -120) {
            sidebar.classList.add('affix');
        } else {
            sidebar.classList.remove('affix');
        }
    })
    
    return <div className="sidebar-cta p-0 p-md-4 text-center" id="sidebar-cta">
        <h4 className="text-primary pb-2">Food Handler Certificate</h4>
        <ul className="text-white text-start list-square">
            { (data.ProductList || []).map((t: ComponentCoreText | null) => {
                if(!t) return null;
                return <li className="pb-1">{t.text}</li>
            })};
        </ul>
        <div className="display-2 price my-0 mt-lg-2 mb-lg-3 text-white">{data.ProductPrice}</div>
        { data.Button ? <Link href={data.Button.href} passHref><div className="btn btn-primary">{data.Button.text}</div></Link> : null }
    </div>
};

export default Sidebar;