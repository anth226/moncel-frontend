import { Children, ReactNode, cloneElement, isValidElement, useState } from 'react';
import Accordion, { AccordionProps } from '@mui/material/Accordion';
import AccordionDetails, { AccordionDetailsClasses } from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

interface CollapsibleTableCellProps {
    summary: ReactNode;
    details: ReactNode;
    detailsClasses?: Partial<AccordionDetailsClasses>;
    last?: boolean; // TODO: this can be used to prevent double borders
    accordionProps?: Omit<AccordionProps, "children">;
    expanded?: boolean;
    onClick?: () => unknown;
}

export const CollapsibleTableCell = (props: CollapsibleTableCellProps) => {
    const summaryBgClass = props.expanded ? "!bg-bunting" : "!bg-catskill";
    const textClass = props.expanded ? "!text-white" : "!text-bunting";
    return <Accordion square classes={{ root: `!shadow-none !border-teal !border-t !border-l !border-r ${props.last ? '!border-b' : ''}` }} disableGutters {...props.accordionProps} expanded={props.expanded}>
      <AccordionSummary className={`${summaryBgClass} ${textClass} w-full text-sm font-medium !px-3 !py-2 !-mb-[1px]`} classes={{ root: '!py-0 !px-3 min-h-0 !-mb-[1px]', content: ''}} expandIcon={<ExpandIcon/>} onClick={props.onClick}>
        { props.summary }
      </AccordionSummary>
      <AccordionDetails classes={props.detailsClasses} >
          { props.details }
      </AccordionDetails>
    </Accordion>
  };
  
  interface CollapsibleCellGroupProps {
    children: ReactNode;
    initialIndex?: number
  }
  interface CollapsibleCellGroupChild {
    expanded: boolean | undefined;
    onClick: () => unknown;
    last: boolean;
  }
  /**
   * HOC for creating a group of CollapsibleTableCells where only one can be expanded at a time
   */
  export const CollapsibleCellGroup = ({ children, initialIndex }: CollapsibleCellGroupProps) => {
    const [ expandedIndex, setExpandedIndex ] = useState<number | undefined>(initialIndex);
  
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

export const ExpandIcon = () => <span className="text-black">+</span>;
