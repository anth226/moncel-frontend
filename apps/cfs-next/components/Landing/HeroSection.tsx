import Link from 'next/link';
import { StaticImageData } from 'next/image';

import { Section } from 'components/Section';
import Button from 'components/core/Button';
import Image from 'components/core/Image';

import styles from './styles.module.scss';

interface IconCardProps {
    image: string | StaticImageData;
    header: string;
    desc: string;
}
const IconCard = (props: IconCardProps) => {
    return <div className="flex gap-3">
        <Image src={props.image} layout="fixed" height={32} width={32} />
        <div className="flex flex-col gap-3">
            <strong>{props.header}</strong>
            <p>{props.desc}</p>
        </div>
        
    </div>
};

const DesktopHeroSection = () => {
    return <Section className={`bg-none hidden lg:block mt-[-100px] z-10 relative ${styles.landing}`}>
        <div className="bg-catskill padded-section grid grid-cols-3">
            <div className="col-span-2 h-[500px] p-7 grid grid-cols-2 gap-7">
                <div className="flex flex-col gap-4">
                    <h4 className="pb-7">Food Handler Certification</h4>
                    <p>{`The Canadian Institute of Food Safety’s official Food Handler Certification Course meets Canada’s legal requirements for food safety training.`}</p>
                    <p>Our training is:</p>
                    <ul className={`${styles['checklist']}`}>
                        <li>nationally recognized</li>
                        <li>accepted by Health Inspectors</li>
                        <li>food safety audit compliant</li>
                    </ul>
                    <Link href="/courses/food-handler-certification-course"><Button variant="invert" id="hero-food-handler-button" className="hover:bg-gradient-to-b hover:from-monza hover:to-monarch hover:!text-white">SIGN UP AND GET STARTED</Button></Link>
                    <p className="text-center">Easy instant enrolment, start in 30 seconds</p>
                </div>

                <div className="flex flex-col gap-4">
                    <IconCard 
                        image="/icons/icon_stroke_laptop.svg"
                        header="100% online"
                        desc="Study and complete your certification at a time and place that suits you."
                        />
                    <IconCard 
                        image="/icons/icon_stroke_certificate.svg"
                        header="Same-day certification"
                        desc="Receive your certificate via email within minutes of completing the course."
                        />
                    <IconCard 
                        image="/icons/icon_stroke_checkmark_box_stroke_tick.svg"
                        header="Government approved"
                        desc="Be confident that your qualification is recognized by Health Inspectors across Canada."
                        />
                    <IconCard 
                        image="/icons/icon_stroke_guide.svg"
                        header="12 months of free CIFS membership"
                        desc="Get important updates and newsletters, and access to our entire library of guides, forms, posters and more."
                        />
                </div>
            </div>


            <div className="flex flex-col gap-7 col-span-1 bg-white p-7">
                <h4>The Canadian Institute of Food Safety</h4>
                <div className="flex gap-2">
                    <p>The Canadian Institute of Food Safety (CIFS) is a forward-thinking education provider dedicated to improving food safety knowledge and skills.</p>
                    <div><Image src="/maple_leaf.svg"  width="70" height="70" layout="fixed" /></div>
                </div>
                <p className="mb-7">{`We work with the public, as well as small, medium and enterprise food businesses in every industry that’s regulated by the Canadian Government.`}</p>

                <div>
                    <div className="border-t-[1px] border-gallery flex flex-row items-center justify-between py-1.5">
                        <Link href="/about/our-mission"><strong className="cursor-pointer hover:underline">Our Mission</strong></Link>
                    </div>
                    <div className="border-t-[1px] border-gallery flex flex-row items-center justify-between py-1.5">
                        <Link href="/faq"><strong className="cursor-pointer hover:underline">FAQs</strong></Link>
                    </div>
                    <div className="border-t-[1px] border-gallery flex flex-row items-center justify-between py-1.5">
                        <Link href="/contact"><strong className="cursor-pointer hover:underline">Contact Us</strong></Link>
                    </div>
                    <div className="border-t-[1px] border-gallery" />
                </div>
            </div>

        </div>
    </Section>
};

const HeroSection = () => {


    return <>
        <DesktopHeroSection />
    </>
};

export default HeroSection;
