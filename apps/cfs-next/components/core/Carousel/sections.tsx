import Image from 'next/image';
import Link from 'next/link';
import { CarouselSlideProps } from './types';
import { Header1, Text } from 'components/core/Typography';

import FoodAllergenSlideBg from 'public/carousel/cfs-hero-allergen.jpg';
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
      <Link href={props.link}><a className={`!text-white bg-gradient-to-b from-nepal to-bunting lg:text-2xl link drop-shadow-md no-underline hover:!no-underline py-4 w-[300px] text-center hover:!to-nepal border-clay border rounded`}>{props.linkText || "Learn more"}</a></Link>
    </div>
    <div className="flex mr-28">
    </div>
  </div>;
};

export const FoodAllergenSlide = () => {
  return <CarouselSection
    background={FoodAllergenSlideBg}
    title="Food Allergen Training"
    description="Protect your customers and your business from allergen-related incidents. Enrol and get your certificate today."
    link="/courses/food-allergen-training"
  />;
};

export const FoodSafetyCardSlide = () => {
  return <CarouselSection
    background={FoodHandlerCourseSlideBg}
    title="Enrol and get certified today."
    description="Enrol and complete your Food Handler Certification on the same day, or take up to 30 days to finish the course."
    link="/courses/food-handler-certification-course"
  />;
};

export const HaccpSlide = () => {
  return <CarouselSection
    background={HaccpSlideBg}
    title="Writing a Food Safety Plan?"
    description="A Food Safety Plan is essential for your Food Safety Program. The CIFS HACCP Food Safety Plan Kit makes building your Food Safety Plan quick and easy."
    link="/haccp-food-safety-plan-kit"
  />;
};

export const LawsRequirementsSlide = () => {
  return <CarouselSection
    background={LawsRequirementsSlideBg}
    title="Understand the law"
    description="Be sure that you’re meeting your legal requirements. Your location and role both impact the laws you need to follow."
    link="/laws-requirements"
  />;
};

export const BusinessSlide = () => {
  return <CarouselSection
    background={BusinessSlideBg}
    title="Business solutions to keep you compliant"
    description="Need to enrol multiple employees? CIFS has the tools you need to enrol, manage and ensure compliance for all your Food Handlers."
    link="/business"
  />;
};
