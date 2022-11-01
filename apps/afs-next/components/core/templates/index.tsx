import { ReactNode, Children, cloneElement, isValidElement, useState } from 'react';
import NextImage, { StaticImageData } from 'next/image';
import NextLink from 'next/link';
import Accordion, { AccordionProps } from '@mui/material/Accordion';
import AccordionDetails, { AccordionDetailsClasses } from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import { Header3, Text } from 'components/core/typography';

export const Divider = () => <div className="border-b-[1px] border-alto col-span-3" />;
export const ListItem = ({ children }: { children?: ReactNode }) => <li className="mb-2 last:mb-0">{ children }</li>;

interface IconCardProps {
  imageSrc: string;
  href?: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export const IconCard = (props: IconCardProps) => {
  const iconComp = <NextImage src={props.imageSrc} alt={`for-job-seekers-icon-${props.title}`} width={32} height={32} layout="fixed" />;
  return <div className={`flex flex-row ${props.className || ""}`}>
    <div className="mr-4">
      { props.href ? <NextLink href={props.href}>{iconComp}</NextLink> : iconComp }
    </div>
    <div className="flex flex-col">
      <Header3 className="!text-base !mb-2 !text-mine !font-semibold">{props.title}</Header3>
      { props.children }
    </div>
  </div>;
};

interface IntroBoxProps {
  imageSrc: string | StaticImageData;
  alt: string;
  children: ReactNode;
  className?: string;
  layout?: boolean;
}

export const IntroBox = (props: IntroBoxProps) => {
  const { imageSrc, alt, children, className, layout } = props;
  return <div>
    <div className={`grid grid-cols-5 gap-8 ${className}`}>
      <div className={`flex flex-col col-span-5 md:col-span-3 order-last ${ layout == false ? "md:order-last" : "md:order-first" }`}>
        { children }
      </div>
      <div className={`order-first ${ layout == false ? "md:order-first" : "md:order-last" } col-span-5 md:col-span-2`}>
        <NextImage src={imageSrc} alt={alt} width={325} height={183} layout="responsive"  />
      </div>
    </div>
  </div>
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
      <div className="bg-teal w-full flex justify-center items-center p-4"><Header3 className="!text-white !text-sm !mb-0 font-semibold">{title.toUpperCase()}</Header3></div>
      <div className="bg-white text-teal p-4"><Text className="!text-teal text-semibold">{description}</Text></div>
  </div>
};

interface CollapsibleTableCellProps {
  summary: ReactNode;
  details: ReactNode;
  detailsClasses?: Partial<AccordionDetailsClasses>;
  last?: boolean; // TODO: this can be used to prevent double borders
  accordionProps?: Omit<AccordionProps, "children">;
  expanded?: boolean;
  onClick?: () => unknown;
}

export const ExpandIcon = () => <span className="text-teal">+</span>;

export const CollapsibleTableCell = (props: CollapsibleTableCellProps) => {
  return <Accordion square classes={{ root: `!shadow-none !border-teal !border-t !border-l !border-r ${props.last ? '!border-b' : ''}` }} disableGutters {...props.accordionProps} expanded={props.expanded} onClick={props.onClick}>
    <AccordionSummary className="!bg-haze w-full text-sm font-medium !px-3 !py-2 !border-b !border-teal !border-solid -mb-[1px]" classes={{ root: '!py-0 !px-3 min-h-0', content: ''}} expandIcon={<ExpandIcon/>}>
      { props.summary }
    </AccordionSummary>
    <AccordionDetails classes={{ root: '!m-0 !p-4' }} >
      { props.details }
    </AccordionDetails>
  </Accordion>
};

interface CollapsibleCellGroupProps {
  children: ReactNode;
}
interface CollapsibleCellGroupChild {
  expanded: boolean | undefined;
  onClick: () => unknown;
  last: boolean;
}
/**
 * HOC for creating a group of CollapsibleTableCells where only one can be expanded at a time
 */
export const CollapsibleCellGroup = ({ children }: CollapsibleCellGroupProps) => {
  const [ expandedIndex, setExpandedIndex ] = useState<number | undefined>(undefined);

  const handleCellClick = (n: number) => () => {
    if(expandedIndex === n) setExpandedIndex(undefined);
    else {
      setExpandedIndex(n);
    }
  }
  const newChildren = Children.map(children, (childElement, i) => {
    if(!isValidElement<CollapsibleCellGroupChild>(childElement)) return childElement;
    let last = false;
    const childCount = Children.toArray(children).length;
    // add border to last element
    if(i == childCount - 1) {
      last = true;
    }
    return cloneElement(childElement, {
      expanded: expandedIndex === i,
      onClick: handleCellClick(i),
      last,
    });
  });

  return <>{ newChildren }</>;

}

interface IconStepProps {
  src: StaticImageData;
  header: string;
  subheader: string;
}
export const IconStepComponent = ({ src, header, subheader}: IconStepProps) => {
  return <div className="flex flex-row gap-3 pb-7">
          <div><NextImage src={src} width={32} height={32} layout="fixed" /></div>
          <div className="flex flex-col">
              <Text className="font-semibold">{header}</Text>
              <Text>{subheader}</Text>
          </div>
      </div>
};

interface ExpandibleFAQProps {
  summary: ReactNode;
  details: ReactNode;
  accordionProps?: AccordionProps;
}

export const ExpandibleFAQ = (props: ExpandibleFAQProps) => {
  return <div className="flex flex-col w-full">
    { props.summary }
    <Accordion sx={{
          '&:before': {
              display: 'none',
          },
          "&$expanded": {
            margin: 0,
          },
          boxShadow: 0,
      }} disableGutters>
      <AccordionSummary classes={{ root: "p-0 m-0"}}>
        <a className="link text-teal font-medium underline !p-0 !m-0">Read More</a>
      </AccordionSummary>
      <AccordionDetails classes={{ root: "p-0 m-0"}}>
        { props.details }
      </AccordionDetails>
    </Accordion>
  </div>
}
