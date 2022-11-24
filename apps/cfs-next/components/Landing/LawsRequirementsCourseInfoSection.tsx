import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'components/core/Image';

import { PROVINCES } from 'data/provinces';
import TrainingImage from 'public/training.webp';

const Section = () => {
    return <div className="w-full py-11 padded-section text-bunting">
        <div className="w-full border-gallery border-[1px] grid grid-cols-3">
            <LawsRequirementsColumn />
            <CourseColumn />
        </div>
    </div>
};

interface LinkItemProps {
    text: string;
    href: string;
}
const LinkItem = ({text, href}: LinkItemProps) => {
    return <div className="border-gallery text-bunting border-t-[1px] flex justify-between items-center py-2">
        <Link href={href}><a className="link">{text}</a></Link>
        <Image src="/icons/icon_stroke_blue_arrow_right.svg" layout="fixed" height={13} width={8} />
    </div>
};

const LawsRequirementsColumn = () => <div className="col-span-2 p-4 md:p-7 gap-4 md:gap-7 grid grid-cols-3">
    <div className="col-span-2 flex flex-col gap-4 md:gap-7">
        <h4 className="font-semibold text-xl">Food safety laws and requirements</h4>
        <p>Food safety training requirements are set and enforced at a provincial level. Click on the name of your province to learn more.</p>
        <div className="relative h-full w-full"><Image src="/canada_map.svg" layout="fill" objectFit="contain" /></div>
    </div>
    <div className="col-span-1">
        { PROVINCES.reduce((elements, province, i) => {
            const provincePathname = province.toLowerCase().replace(" ", "-");
            elements.push(<LinkItem text={province} href={`/laws-requirements/by-location/${provincePathname}`}/>)
            if (i == PROVINCES.length-1) elements.push(<div className="border-t-[1px] border-gallery" />)
            return elements;
        }, [] as ReactNode[]) }
    </div>
</div>;

const CourseColumn = () => <div className="col-span-1 bg-catskill flex flex-col">
    <div className="p-4 md:p-7 flex flex-col gap-7">
        <h4 className="font-semibold text-xl">Get more than certification</h4>
        <p>When you register in the CIFS Food Handler Certification Course, you automatically receive 12 months of CIFS Membership for free. CIFS Members enjoy regular newsletters and important updates, as well as unlimited access to our entire Resource Library, including:</p>
        <ul className="checklist">
            <li>printable posters, checklists and fact sheets</li>
            <li>downloadable how-to guides</li>
            <li>food safety news and product recalls</li>
            <li>instructional videos and more</li>
        </ul>

    </div>

    <div>
        <Image src={TrainingImage} />
    </div>

</div>;

export default Section;
