
import { Header, Footer } from 'components/layout';

import { StoryBlokHeader, StoryBlokFooter } from 'moncel-one-sdk/cms/types';

import icxstyles from 'styles/icx_secondary.module.scss'

interface LayoutProps {
    header: StoryBlokHeader;
    footer: StoryBlokFooter;
    children: JSX.Element | JSX.Element[];
}
const OneCol = (props: LayoutProps) => {
    const { header, footer, children } = props;
    return <div>
        <Header header={header}/>
        <div className={icxstyles.page}>
            { children }
            <Footer footer={footer} />
        </div>
    </div>
}

export default OneCol;
