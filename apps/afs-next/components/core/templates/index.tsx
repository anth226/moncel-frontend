import { ReactNode } from 'react';
import NextImage, { StaticImageData } from 'next/image';
import NextLink from 'next/link';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import { Header5, Text } from 'components/core/typography';

export const Divider = () => <div className="mb-[30px] border-b-[1px] border-afs-light-gray col-span-3" />;
export const ListItem = ({ children }: { children?: ReactNode }) => <li className="ml-4 my-1.5">{ children }</li>;

interface IconCardProps {
  imageSrc: string;
  href?: string;
  title: string;
  children: ReactNode;
  className?: string;
}
export const IconCard = (props: IconCardProps) => {
  const iconComp = <NextImage src={props.imageSrc} alt={`for-job-seekers-icon-${props.title}`} width={32} height={32} layout="fixed" />;
  return <div className={`flex flex-row ${props.className}`}>
    <div className="w-10 mr-3">
      { props.href ? <NextLink href={props.href}>{iconComp}</NextLink> : iconComp }
    </div>
    <div className="flex flex-col">
      <Header5 className="pb-2">{props.title}</Header5>
      { props.children }
    </div>
  </div>;
};

interface ImageBannerCardProps {
  imageSrc: string | StaticImageData;
  title: string;
  description: string;
}

export const ImageBannerCard = (props: ImageBannerCardProps) => {
  const { imageSrc, title, description } = props;
  return <div className="flex flex-col w-full">
      <NextImage src={imageSrc} alt={`image-graphic-for-card-${title}`} layout="responsive"  />
      <div className="bg-afs-green text-white w-full flex justify-center items-center p-4"><Text>{title.toUpperCase()}</Text></div>
      <div className="bg-white text-afs-green p-4"><Text className="">{description}</Text></div>
  </div>
};

interface CollapsibleTableCellProps {
  summary: ReactNode;
  details: ReactNode;
}
export const CollapsibleTableCell = (props: CollapsibleTableCellProps) => {
  return <Accordion classes={{ root: "shadow-none p-0 border-[1px] border-afs-green" }}>
    <AccordionSummary className="bg-afs-light-gray w-full" classes={{ root: 'p-3 border-[1px] border-afs-green', content: 'p-0 m-0'}} expandIcon="+">
      { props.summary }
    </AccordionSummary>
    <AccordionDetails>
      { props.details }
    </AccordionDetails>
  </Accordion>
};
