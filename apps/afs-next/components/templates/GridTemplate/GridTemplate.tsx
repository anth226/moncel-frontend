import NextLink from 'next/link';
import NextImage from 'next/image';
import { useRouter } from 'next/router';

import { GridTemplateProps, GridTemplateCard } from '../types';
import { Header1, Header4, Text, TextBlock } from 'components/core/typography';
import { PathnameComponent, NavigationComponent } from 'components/templates';
import Button from 'components/core/Button';

const GridTemplate = (props: GridTemplateProps) => {
    return <div id={props.id} className="padded-section grid grid-cols-12 bg-white lg:rounded-[3px] lg:border border-[#0badad33] py-8 lg:p-8 w-full">
        <div className="row-start-1 col-span-12 gap-4 border-solid border-b-[1px] border-teal pb-8 mb-8">
            <PathnameComponent {...props} />
            <Header1 className="text-teal mb-2">{props.header}</Header1>
            { props.subheader ? <Text className="!text-teal text-[18px] font-medium leading-4">{props.subheader}</Text> : null }
        </div>
        <div className="row-start-2 col-span-12 lg:col-span-3 flex flex-row lg:mr-8">
            <NavigationComponent {...props.navigation} />
        </div>
        <div className="row-start-3 lg:row-start-2 col-span-12 lg:col-span-9">
            <TextBlock className="pb-4">{props.description}</TextBlock>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
    const router = useRouter();
    const { card, parentId, index } = props;

    const imageComp = card.href ? <NextLink href={card.href}><div className="link w-full mb-4 hover:cursor-pointer"><NextImage src={card.imageSrc} blurDataURL={typeof card.imageSrc == "string" ? card.imageSrc : undefined} placeholder="blur" alt={`grid-card-${card.title}`} height={125} width={222} layout="responsive"/></div></NextLink> : <NextImage src={card.imageSrc} alt={`grid-card-${card.title}`} height={125} width={222} layout="responsive"/>;
    const titleComp = card.href ? <NextLink href={card.href}><span className="link hover:decoration-teal"><Header4 className="text-teal pb-4 font-semibold hover:underline hover:cursor-pointer">{card.title}</Header4></span></NextLink> : <Header4 className="text-teal font-semibold hover:underline hover:cursor-pointer">{card.title}</Header4>;
    return <div className="flex flex-col justify-between border-[1px] border-teal p-4" id={`${parentId}-card-${index}`}>
        <div className="mb-4">
            { imageComp }
            { titleComp }
            <Text className="!leading-5">{card.description}</Text>
        </div>
        <Button id={`${parentId}-learn-more-${index}`} className="w-full align-bottom" onClick={() => router.push(card.href)}>Learn More</Button>
    </div>;
};

export default GridTemplate;
