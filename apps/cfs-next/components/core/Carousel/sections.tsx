import Image from 'next/image';
import NextImage from 'next/image';
import Link from 'next/link';
import { CarouselSlideProps } from './types';
import { Header1, Text } from 'components/core/Typography';

import CovidSlideBg from 'public/carousel/cfs-covid-02.jpg';
import FoodHandlerCourseSlideBg from 'public/carousel/home103.jpg';
import HaccpSlideBg from 'public/carousel/cfs-haccp-final.jpg';
import LawsRequirementsSlideBg from 'public/carousel/home100.jpg';
import BusinessSlideBg from 'public/carousel/home107.jpg';

const CarouselSection = (props: CarouselSlideProps) => {

  return <div className={`relative min-w-full h-[100px] md:h-[300px] xl:h-[450px] border-t-[1px] border-white border-b-[1px]`} key={`carousel-slide-${props.title}`}>
    { /* background image */}
    <div className="absolute z-[-1] w-full h-full" key={`carousel-slide-${props.title}-background`}>
      <Image src={props.background} priority loading="eager" alt={`carousel-slide-${props.title}-background`} layout="fill" objectFit="cover" placeholder="blur" />
    </div>
    {/* content */}
    <div className="hidden md:block w-full h-full padded-section px-4 lg:px-0">
      <SlideTemplate {...props} />
    </div>
  </div>;
};

const SlideTemplate = (props: CarouselSlideProps) => {
  return <div className="grid grid-flow-row grid-cols-2 w-full h-full !text-white">
    <div className="flex flex-col h-full justify-center items-start gap-4">
      <Header1 className={`drop-shadow-md text-[27px]`}>{props.title}</Header1>
      {(props.description instanceof Array) ? props.description.map((line, i) => <Text key={`${props.title}-slide-description-${i}`} className={`drop-shadow-md`}>{line}</Text>) : <Text className={`!text-lg lg:!text-xl !text-white`}>{props.description}</Text>}
      <Link href={props.link}><a className={`!text-white bg-gradient-to-b from-nepal to-bunting lg:text-2xl link drop-shadow-md no-underline py-4 w-[300px] text-center hover:underline`}>{props.linkText || "Learn more"}</a></Link>
    </div>
    <div className="flex mr-28">
    </div>
  </div>;
};

export const CovidSlide = () => {
  return <CarouselSection
    background={CovidSlideBg}
    title="Concerned about the impact of COVID-19?"
    description="Get updated information and the resources your food business needs to navigate the coronavirus pandemic."
    link="https://resources.foodsafety.ca/topic/covid-19"
  />;
};

export const FoodSafetyCardSlide = () => {
  return <CarouselSection
    background={FoodHandlerCourseSlideBg}
    title="The official AIFS Food Safety Card."
    description="Food safety credentials when you need them. Be prepared for when your local Health Inspector pays you a visit."
    link="/students/food-safety-card"
  />;
};

export const HaccpSlide = () => {
  return <CarouselSection
    background={HaccpSlideBg}
    title="Writing a Food Safety Plan?"
    description="A Food Safety Plan is essential for your Food Safety Program. The AIFS HACCP Food Safety Plan Kit makes building your Food Safety Plan quick and easy."
    link="/haccp-food-safety-plan-kit"
  />;
};

export const FoodSafetyDecalSlide = () => {
  return <CarouselSection
    background={LawsRequirementsSlideBg}
    title="Show that you're serious."
    description="AIFS Members get a Food Safety Decal to show customers and passers-by that their food workers are properly trained and serious about food safety."
    link="/membership/food-safety-decal"
  />;
};

export const FoodSafetySupervisorSlide = () => {
  return <CarouselSection
    background={BusinessSlideBg}
    title="The course that gets accepted."
    description="Need to enrol multiple employees? CIFS has the tools you need to enrol, manage and ensure compliance for all your Food Handlers."
    link="/courses/food-safety-supervisor"
  />;
};
