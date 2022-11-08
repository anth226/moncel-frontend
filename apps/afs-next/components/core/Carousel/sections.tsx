import Image from 'next/image';
import NextImage from 'next/image';
import Link from 'next/link';
import { CarouselSlideProps } from './types';
import { Header1, Text } from 'components/core/typography';

import CovidSlideBg from 'public/home-covid.jpg';
import FoodSafetyCardSlideBg from 'public/home-fsc.jpg';
import HaccpSlideBg from 'public/home-haccp.jpg';
import HeroDecalSticker from 'public/home-decal.jpg';
import FSSSlideBg from 'public/home-fss.jpg';

const CarouselSection = (props: CarouselSlideProps) => {

  return <div className={`relative min-w-full h-[100px] md:h-[300px] xl:h-[450px] border-t-[1px] border-white border-b-[1px]`} key={`carousel-slide-${props.title}`}>
    { /* background image */}
    <div className="absolute z-[-1] w-full h-full" key={`carousel-slide-${props.title}-background`}>
      <Image src={props.background} priority loading="eager" alt={`carousel-slide-${props.title}-background`} layout="fill" objectFit="cover" placeholder="blur" />
    </div>
    {/* content */}
    <div className="hidden md:block w-full h-full padded-section px-4 lg:px-0">
      {props.orientation == "left" ? <LeftColLayout {...props} /> : <RightColLayout {...props} />}
    </div>
  </div>;
};

const LeftColLayout = (props: CarouselSlideProps) => {
  return <div className="grid grid-flow-row grid-cols-2 w-full h-full !text-white">
    <div className="flex flex-col h-full justify-center items-start gap-4">
      <Header1 className={`${props.colourPrimaryClass || ""} drop-shadow-md text-[27px]`}>{props.title}</Header1>
      {(props.description instanceof Array) ? props.description.map((line, i) => <Text key={`${props.title}-slide-description-${i}`} className={`${props.colourSecondaryClass || ""} drop-shadow-md`}>{line}</Text>) : <Text className={`!text-lg lg:!text-xl ${props.colourSecondaryClass || "!text-white"}`}>{props.description}</Text>}
      <Link href={props.link}><a className={`${props.colourPrimaryClass || "!text-white"} lg:text-2xl font-bold link drop-shadow-md no-underline hover:underline`}>{props.linkText || "Learn more"}</a></Link>
      {props.images ? <div className="hidden xl:flex"><NextImage src={`${props.images}`} width={444} height={145} layout="fixed" alt={`${props.title}`} /></div> : null}
    </div>
    <div className="flex mr-28">
    </div>
  </div>;
}


const RightColLayout = (props: CarouselSlideProps) => <div className="grid grid-flow-row grid-cols-2 w-full h-full !text-white">
  <div className="ml-28" />
  <div className="flex flex-col justify-center items-start gap-2 lg:gap-4 h-full">
    <Header1 className={`${props.colourPrimaryClass || ""} drop-shadow-md text-[27px]`}>{props.title}</Header1>
    {(props.description instanceof Array) ? props.description.map((line, i) => <Text key={`${props.title}-slide-description-${i}`} className={`${props.colourSecondaryClass || ""} !text-lg lg:!text-xl drop-shadow-md`}>{line}</Text>) : <Text className={`!text-lg lg:!text-xl !text-white {props.colourSecondaryClass || ""}`}>{props.description}</Text>}
    <Link href={props.link}><a className={`${props.colourPrimaryClass || "!text-white"} lg:text-2xl font-bold drop-shadow-md no-underline hover:underline`}>{props.linkText || "Learn more"}</a></Link>
    {props.images ? <div className="flex flex-row"></div>
      : null}
  </div>
</div>;

export const CovidSlide = () => {
  return <CarouselSection
    background={CovidSlideBg}
    title="Concerned about the impact of COVID-19?"
    description="Get updated information and the resources your food business needs to navigate the coronavirus pandemic."
    link="https://resources.foodsafety.com.au/topic/covid-19"
    orientation="right"
  />;
};

export const FoodSafetyCardSlide = () => {
  return <CarouselSection
    background={FoodSafetyCardSlideBg}
    title="The official AIFS Food Safety Card."
    description="Food safety credentials when you need them. Be prepared for when your local Health Inspector pays you a visit."
    link="/students/food-safety-card"
    images={["/food-safety-cards.png"]}
    orientation="left"
  />;
};

export const HaccpSlide = () => {
  return <CarouselSection
    background={HaccpSlideBg}
    title="Writing a Food Safety Plan?"
    description="A Food Safety Plan is essential for your Food Safety Program. The AIFS HACCP Food Safety Plan Kit makes building your Food Safety Plan quick and easy."
    link="/haccp-food-safety-plan-kit"
    orientation="left"
  />;
};

export const FoodSafetyDecalSlide = () => {
  return <CarouselSection
    background={HeroDecalSticker}
    title="Show that you're serious."
    description="AIFS Members get a Food Safety Decal to show customers and passers-by that their food workers are properly trained and serious about food safety."
    link="/membership/food-safety-decal"
    orientation="right"
  />;
};

export const FoodSafetySupervisorSlide = () => {
  return <CarouselSection
    background={FSSSlideBg}
    title="The course that gets accepted."
    description={["The Official AIFS Food Safety Supervisor course is nationally recognised, ensuring that you meet all your food safety training legal obligations.", "Approved and accepted by every council in every state and for every industry. Don't risk your business, enrol today."]}
    link="/courses/food-safety-supervisor"
    orientation="right"
    colourPrimaryClass='text-teal'
    colourSecondaryClass='text-black'
  />;
};
