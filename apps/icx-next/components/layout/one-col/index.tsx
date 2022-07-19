
import { Header, Footer } from 'components/layout';

import { ComponentIccLayoutHeader, ComponentIccLayoutFooter } from "generated/strapi-types";

import icxstyles from 'styles/icx_secondary.module.scss'

interface LayoutProps {
    header: ComponentIccLayoutHeader;
    footer: ComponentIccLayoutFooter;
    children: JSX.Element | JSX.Element[];
}
const OneCol = (props: LayoutProps) => {
    const { header, footer, children } = props;
    return <div>
        <Header data={header}/>
        <div className={icxstyles.page}>
            { children }
            <Footer data={footer} />
        </div>
    </div>
}

export default OneCol;
