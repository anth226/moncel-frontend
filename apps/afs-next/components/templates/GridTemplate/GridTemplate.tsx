import Image from 'next/image';
import NextLink from 'next/link';

import { GridTemplateProps, GridTemplateCard } from '../types';
import { Header2, Header4, Text } from 'components/core/typography';
import { PathnameComponent, NavigationComponent } from 'components/templates';

const GridTemplate = (props: GridTemplateProps) => {

    return <div id={props.id} className="padded-section grid grid-cols-12 grid-flow-row bg-white px-7">
        <div className="col-span-12 flex flex-col gap-3 border-solid border-b-[1px] border-afs-green py-8 mb-4">
            <PathnameComponent {...props} />
            <Header2 className="text-afs-green font-semibold">{props.header}</Header2>
            <Header4 className="text-afs-green">{props.subheader}</Header4>
        </div>
        <div className="row-start-2 col-span-12 md:col-span-3 flex flex-row py-8">
            <NavigationComponent {...props.navigation} />
        </div>
        <div className="row-start-2 col-span-12 md:col-span-9">
            <Text className="mt-6 mb-7">{props.description}</Text>
            <div className="grid grid-cols-3 grid-flow-row gap-5 mb-10">
                { props.cards.map((card, i) => {
                    return <GridCard card={card} parentId={props.id} index={i} />;
                })}
            </div>
        </div>
    </div>;
};

interface GridCardProps {
    card: GridTemplateCard;
    parentId: string;
    index: number;
    href?: string;
}
const GridCard = (props: GridCardProps) => {
    const { card, parentId, index } = props;

    const imageComp = card.href ? <NextLink href={card.href}><span className="link"><Image src={card.imageSrc} alt={`grid-card-${card.title}`} height={125} width={222}/></span></NextLink> : <Image src={card.imageSrc} alt={`grid-card-${card.title}`} height={125} width={222}/>;
    const titleComp = card.href ? <NextLink href={card.href}><span className="link hover:decoration-afs-green"><Header4 className="text-afs-green">{card.title}</Header4></span></NextLink> : <Header4 className="text-afs-green">{card.title}</Header4>;
    return <div className="flex flex-col items-start border-[1px] border-afs-green p-4 md:w-[238px]" id={`${parentId}-card-${index}`}>
        { imageComp }
        { titleComp }
        <Text>{card.description}</Text>
    </div>;
};

export default GridTemplate;
