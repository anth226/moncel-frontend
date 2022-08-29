import Image from 'next/image';
import Link from 'next/link';

import { Section } from 'components/core/Section';
import CommunitySectionMd from './CommunitySection.mdx';

import { Header4, Text } from 'components/core/typography';

const Grid = () => {
    return <div className="grid grid-cols-3 grid-flow-row w-full gap-x-8 gap-y-4">
        <GridCell imageSrc="/resources_guides_thumbnail.jpg" title="Guides" href="https://resources.foodsafety.com.au/guides" />
        <GridCell imageSrc="/resources_templates_thumbnail.jpg" title="Templates" href="https://resources.foodsafety.com.au/templates" />
        <GridCell imageSrc="/resources_factsheets_thumbnail.jpg" title="Templates" href="https://resources.foodsafety.com.au/fact-sheets" />
        <GridCell imageSrc="/resources_posters_thumbnail.jpg" title="Templates" href="https://resources.foodsafety.com.au/posters" />
        <GridCell imageSrc="/resources_videos_thumbnail.jpg" title="Templates" href="https://resources.foodsafety.com.au/videos" />
        <GridCell imageSrc="/resources_recalls_thumbnail.jpg" title="Templates" href="https://resources.foodsafety.com.au/food-recalls" />
    </div>;
};

interface GridCellProps {
    imageSrc: string;
    title: string;
    href: string;
}

const GridCell = ({ imageSrc, title, href }: GridCellProps) => {
    return <div className="border-solid border rounded border-afs-green flex flex-col items-center p-3">
        <Image src={imageSrc} width={171} height={96} alt={`Thumbnail image for ${title} resource`} />
        <div className="text-afs-green font-semibold p-3"><Link href={href}><a>{title}</a></Link></div>
        <div className="text-afs-green font-semibold p-3 border-solid border border-afs-green rounded hover:bg-afs-green hover:text-white w-[156px] flex items-center justify-center"><Link href={href}><a className="text-xs">LEARN MORE </a></Link></div>
    </div>;
};

const CommunitySection = () => {
    return <Section className="bg-afs-light-gray py-11 px-4 md:px-0 md:section-vertical-padding">
        <div className="grid grid-cols-3 grid-flow-row gap-8 w-full">
            <div className="col-start-1 col-span-3 md:col-span-1">
            <Header4 className="text-afs-green pb-4 mb-4 border-b-[1px] border-b-afs-green w-full">AIFS in the Community</Header4>
                <CommunitySectionMd />
            </div>
            <div className="hidden md:block col-start-2 col-span-2">
            <Header4 className="text-afs-green pb-4 mb-4 border-b-[1px] border-b-afs-green w-full">Food Safety Resources</Header4>
            <Text className="mb-4">Our mission is to reduce food-borne illness in Australia. To do this, we provide our community with hundreds of practical resources to help them manage food safety hazards in the workplace. </Text>
            <Grid />
            </div>
        </div>
    </Section>;
};

export default CommunitySection;
