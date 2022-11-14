import Image from 'next/image';
import Link from 'next/link';
import NextImage from 'next/image';

import { Section } from 'components/core/Section';

import { Header2, Text } from 'components/core/typography';

const Grid = () => {
    return <div className="grid grid-cols-2 lg:grid-cols-3 grid-flow-row w-full gap-6 mt-6">
        <GridCell imageSrc="/photo_articles.jpg" title="Guides" href="https://resources.foodsafety.com.au/guides" />
        <GridCell imageSrc="/photo_templates.jpg" title="Templates" href="https://resources.foodsafety.com.au/templates" />
        <GridCell imageSrc="/photo_guides.jpg" title="Fact Sheets" href="https://resources.foodsafety.com.au/fact-sheets" />
        <GridCell imageSrc="/photo_factsheets.jpg" title="Posters" href="https://resources.foodsafety.com.au/posters" />
        <GridCell imageSrc="/photo_posters.jpg" title="Videos" href="https://resources.foodsafety.com.au/videos" />
        <GridCell imageSrc="/photo_video.jpg" title="Food Recalls" href="https://resources.foodsafety.com.au/food-recalls" />
    </div>;
};

interface GridCellProps {
    imageSrc: string;
    title: string;
    href: string;
}

const GridCell = ({ imageSrc, title, href }: GridCellProps) => {
    return <div className="border-solid border border-teal flex flex-col items-center p-4">
        <Link href={href}><a className="no-underline hover:underline text-center">
            <Image src={imageSrc} width={330} height={186} alt={`Thumbnail image for ${title} resource`} />
            <div className="text-teal font-semibold pb-3 pt-2">{title}</div>
        </a></Link>
        <Link href={href}><a id={`button-learn-more-${title.replace(" ", "_")}`} className="uppercase text-sm tracking-wide py-3 w-full bg-transparent px-0 lg:px-6 text-teal items-center rounded border border-teal hover:bg-teal hover:text-white hover:cursor-pointer flex justify-center text-center no-underline">Learn More</a></Link>
    </div>;
};

const CommunitySection = () => {
    return <Section className="bg-haze section-vertical-padding">
        <div className="padded-section grid grid-cols-3 grid-flow-row gap-8 w-full">
            <div className="col-start-1 col-span-3 md:col-span-1">
                <Header2 className="col-span-12 row-start-1 text-xl text-teal pb-4 border-b-[1px] border-b-teal w-full mb-4">AIFS in the Community</Header2>
                <div className={`markdown-container md:row-start-2 col-span-12 mt-7 md:mt-0 md:col-span-7`}>
                    <div className="hidden lg:block float-right ml-4">
                        <NextImage src="/photo_ozharvest.jpg" width="200" height="112" layout="fixed" alt="Oz Harvest"/>
                    </div>
                    <Text className="">The AIFS Foundation tackles food-related issues throughout Australia.</Text>
                    <Text>Our team are dedicated to reducing the number of people with food-borne illnesses and helping the vulnerable in our community who suffer from hunger.</Text>
                    <Text className="font-semibold">Working towards better food safety</Text>
                    <Text>We believe that educating food workers and the general public is key to reducing the number of food-borne illness incidents in Australia.</Text>
                    <Text>{`That's`} why we provide hundreds of free resources and promote food safety through the media and other channels.</Text>
                    <Text className="font-semibold">Helping OzHarvest feed those in need</Text>
                    <div className="float-right ml-4 block">
                        <NextImage src="/logo_ozharvest.svg" width="75" height="35" layout="fixed" alt="Oz Harvest"/>
                    </div>
                    <Text>For every Food Safety Supervisor course enrolment, {`we'll`} help to feed two people in need in partnership with OzHarvest. For every Food Handler enrolment, {`we'll`} help to feed one person.</Text>
                    <Text>Our team work closely with OzHarvest and volunteer regularly to help collect, prepare and distribute food to vulnerable people in our community.</Text>
                    <Text className="italic"><sub>Photo Credit: OzHarvest CEO CookOff 2016</sub></Text>
                </div>

            </div>
            <div className="hidden md:block col-start-2 col-span-2">
                <Header2 className="col-span-12 row-start-1 text-xl font-semibold text-teal pb-4 border-b-[1px] border-b-teal w-full mb-4">Food Safety Resources</Header2>
                <Text>Our mission is to reduce food-borne illness in Australia. To do this, we provide our community with hundreds of practical resources to help them manage food safety hazards in the workplace. </Text>
                <Grid />
            </div>
        </div>
    </Section>;
};

export default CommunitySection;
