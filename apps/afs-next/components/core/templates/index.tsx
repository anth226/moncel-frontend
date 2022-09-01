import { ReactNode } from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';

import { Header5 } from 'components/core/typography';

export const Divider = () => <div className="mb-[30px] border-b-[1px] border-afs-light-gray col-span-3" />;
export const ListItem = ({ children }: { children: ReactNode }) => <li className="ml-4 my-1.5">{ children }</li>;

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
