
import { ReactNode, useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import Module from 'module';

import { Divider } from 'components/core/templates';

import { RowsTemplate } from 'components/templates';
import { RowsTemplateProps } from 'components/templates/types';
import Layout from 'components/core/layout';
import { Link, Header3 } from 'components/core/typography';
import { CoursesBackground, coursePageOverviewData } from 'components/courses';
import FSS from 'components/Faq/fss.mdx';
import FH from 'components/Faq/fh.mdx';
import FSSFSTrainingDifference from 'components/Faq/fss-fh-training-difference.mdx';
import FSSFSDifference from 'components/Faq/fss-fh-difference.mdx';
import ShouldIDo from 'components/Faq/should-i-do.mdx';
import HowToChoose from 'components/Faq/how-to-choose.mdx';
import CanIDoOnline from 'components/Faq/can-i-do-online.mdx';
import WhatTrainingDoINeed from 'components/Faq/what-training-do-i-need.mdx';
import HowToTakeMelbourne from 'components/Faq/how-to-take-melbourne.mdx';
import HowLongDoTheyTake from 'components/Faq/how-long-do-they-take.mdx';
import OnlineVsClassroom from 'components/Faq/online-vs-classroom.mdx';
import WhatIsNationallyRecognized from 'components/Faq/what-is-nationally-recognized.mdx';


// todo: Expand card on redirect
interface FaqProps {
    summary: string;
    details: ReactNode | Module;
}

const Faq = ({
    summary,
    details,
}: FaqProps) => {
    const [ expanded, setExpanded ] = useState(false);
    return <div className="flex flex-col w-full">
        <Divider />
        <Accordion expanded={expanded} disableGutters sx={{ boxShadow: 0 }}>
            <AccordionSummary>
                <Link onClick={() => setExpanded(!expanded)} className="!text-black !no-underline">{ summary }</Link>
            </AccordionSummary>
            <AccordionDetails>
                { details }
                <Link onClick={() => setExpanded(false)} className="!no-underline">Read Less</Link>
            </AccordionDetails>
        </Accordion>
    </div>
}

const AIFSCoursesSection = () => {
    return <div className="mdx grid grid-cols-1 md:grid-cols-2 grid-flow-row w-full col-span-3" id="aifs-courses">
        <Header3 className="col-span-2">AIFS Courses</Header3>
        <Faq summary="What is a Food Safety Supervisor course?" details={<FSS />} />
        <Faq summary="What is a Food Handler course?" details={<FH />} />
        <Faq summary="How is a Food Safety Supervisor course different to Food Handling training?" details={<FSSFSTrainingDifference />} />
        <Faq summary="Should I do a Food Safety Supervisor or a Food Handler course?" details={<ShouldIDo />} />
        
        <Faq summary="How do I choose the right food safety course??" details={<HowToChoose />} />
        <Faq summary="What’s the difference between a Food Handler and a Food Safety Supervisor?" details={<FSSFSDifference />} />
        <Faq summary="Can I do a Food Safety Supervisor course online?" details={<CanIDoOnline />} />
        <Faq summary="What training does a Food Handler need?" details={<WhatTrainingDoINeed />} />
        <Faq summary="How can I take a Food Handler course in Melbourne?" details={<HowToTakeMelbourne />} />
        <Faq summary="How long do the food safety courses take?" details={<HowLongDoTheyTake />} />
        <Faq summary="Online vs classroom food safety courses - what's better?" details={<OnlineVsClassroom />} />
        <Faq summary="What is nationally recognised training?" details={<WhatIsNationallyRecognized />} />
        
    </div>
}

const TemplateData: Omit<RowsTemplateProps, "children"> = {
    ...coursePageOverviewData,
    pathname: "faq",
    displayPathname: "FREQUENTLY ASKED QUESTIONS",
    header: "Frequently Asked Questions",
    subheader: "Get answers to your questions with the Australian Institute of Food Safety's Frequently Asked Questions section.",
    
};

const FaqPage = () => <Layout>
    <CoursesBackground>
        <RowsTemplate {...TemplateData}>
            <>
                <AIFSCoursesSection />
                
            </>
        </RowsTemplate>
    </CoursesBackground>
</Layout>

export default FaqPage;
