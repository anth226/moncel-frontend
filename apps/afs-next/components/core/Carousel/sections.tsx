import Image from 'next/image';
import Link from 'next/link';
import { CarouselSlideProps } from './types';
import { Header3, Header5 } from 'components/core/typography';

const CarouselSection = (props: CarouselSlideProps) => {
    return <div className={`relative min-w-full h-[100px] md:h-[300px] xl:h-[450px] 2xl:h-[600px]`} key={`carousel-slide-${props.title}`}>
        { /* background image */ }
        <div className="absolute z-[-1] w-full h-full" key={`carousel-slide-${props.title}-background`}>
          <Image src={props.background} blurDataURL={props.background} priority loading="eager" alt={`carousel-slide-${props.title}-background`} layout="fill" objectFit="cover" placeholder="blur"  />
        </div>
        {/* content */}
        <div className="hidden md:block w-full h-full">
        { props.orientation == "left" ? <LeftColLayout {...props} /> : <RightColLayout {...props} /> }
        </div>
    </div>;
};

const LeftColLayout = (props: CarouselSlideProps) => <div className="grid grid-flow-row grid-cols-2 w-full h-full text-white">
  <div className="flex flex-col h-full justify-center items-start gap-4 ml-28">
    <Header3 className={`${props.colourPrimaryClass || ""} drop-shadow-md`}>{props.title}</Header3>
      { (props.description instanceof Array) ? props.description.map((line, i) => <Header5 key={`${props.title}-slide-description-${i}`} className={`${props.colourSecondaryClass || ""} drop-shadow-md`}>{line}</Header5>) : <Header5 className={props.colourSecondaryClass || ""}>{props.description}</Header5> }
      <Link href={props.link}><Header3 className={`${props.colourPrimaryClass || ""} link drop-shadow-md`}>{props.linkText || "Learn more"}</Header3></Link>

        { props.images ? <div className="flex flex-row"></div>
          : null}
  </div>
  <div className="flex mr-28">
  </div>
</div>;

const RightColLayout = (props: CarouselSlideProps) => <div className="grid grid-flow-row grid-cols-2 w-full h-full text-white">
  <div className="ml-28" />
  <div className="flex flex-col justify-center items-start gap-4 h-full mr-28">
    <Header3 className={`${props.colourPrimaryClass || ""} drop-shadow-md`}>{props.title}</Header3>
      { (props.description instanceof Array) ? props.description.map((line, i) => <Header5 key={`${props.title}-slide-description-${i}`} className={`${props.colourSecondaryClass || ""} drop-shadow-md`}>{line}</Header5>) : <Header5 className={props.colourSecondaryClass || ""}>{props.description}</Header5> }
      <Link href={props.link}><Header3 className={`${props.colourPrimaryClass || ""} link drop-shadow-md`}>{props.linkText || "Learn more"}</Header3></Link>
      { props.images ? <div className="flex flex-row"></div>
        : null}
  </div>
</div>;

export const CovidSlide = () => {
    return <CarouselSection
        background="/afs-covid-03_0.jpeg"
        title="Concerned about the impact of COVID-19?"
        description="Get updated information and the resources your food business needs to navigate the coronavirus pandemic."
        link="/topic/covid-19"
        orientation="right"
        />;
};

export const FoodSafetyCardSlide = () => {
    return <CarouselSection
        background="/hero-food-safety-card.jpeg"
        title="The official AIFS Food Safety Card."
        description="Food safety credentials when you need them. Be prepared for when your local Health Inspector pays you a visit."
        link="/students/food-safety-card"
        images={["food-safety-cards.png"]}
        orientation="left"
        />;
};

export const HaccpSlide = () => {
    return <CarouselSection
        background="/afs-haccp-final.jpeg"
        title="Writing a Food Safety Plan?"
        description="A Food Safety Plan is essential for your Food Safety Program. The AIFS HACCP Food Safety Plan Kit makes building your Food Safety Plan quick and easy."
        link="/haccp-food-safety-plan-kit"
        orientation="left"
        />;
};

export const FoodSafetyDecalSlide = () => {
  return <CarouselSection
      background="/hero-decal-sticker.jpeg"
      title="Show that you're serious."
      description="AIFS Members get a Food Safety Decal to show customers and passers-by that their food workers are properly trained and serious about food safety."
      link="/membership/food-safety-decal"
      orientation="right"
      />;
};

export const FoodSafetySupervisorSlide = () => {
  return <CarouselSection
      background="/afs-01a.jpeg"
      title="The course that gets accepted."
      description={["The Official AIFS Food Safety Supervisor course is nationally recognised, ensuring that you meet all your food safety training legal obligations.", "Approved and accepted by every council in every state and for every industry. Don't risk your business, enrol today."]}
      link="/haccp-food-safety-plan-kit"
      orientation="right"
      colourPrimaryClass='text-afs-green'
      colourSecondaryClass='text-black'
      />;
};
