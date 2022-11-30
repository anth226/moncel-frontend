import { ReactNode, useState } from 'react';
import Accordion, { AccordionProps } from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';


interface ExpandibleFAQProps {
    summary: ReactNode;
    details: ReactNode;
    accordionProps?: AccordionProps;
};

const ExpandibleFAQ = (props: ExpandibleFAQProps) => {
    // set state of Read More button
    const [readMore, setReadMore] = useState(true);
    const toggleReadMore = () => {
        setReadMore(current => !current);
    };
    return <div className="flex flex-col w-full">
        {props.summary}
        <Accordion sx={{
            '&:before': {
                display: 'none',
            },
            "&$expanded": {
                margin: 0,
            },
            boxShadow: 0,
        }} disableGutters>
            <AccordionSummary classes={{ root: "!p-0 !m-0" }} onClick={toggleReadMore}>
                <a className="text-bunting font-medium !underline lg:hover:!no-underline  !p-0 !m-0">
                    {readMore == true ? "Read More" : "Read Less"}</a>
            </AccordionSummary>
            <AccordionDetails classes={{ root: "!p-0 !m-0 text-bunting" }}>
                {props.details}
            </AccordionDetails>
        </Accordion>
    </div>
};

export default ExpandibleFAQ;
