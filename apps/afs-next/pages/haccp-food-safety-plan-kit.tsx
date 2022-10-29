import Layout from 'components/core/layout';
import { Divider, ListItem, IconCard, ExpandibleFAQ, IntroBox } from 'components/core/templates';
import { CoursesBackground } from 'components/courses';
import { Header1, Header3, Header4, Text } from 'components/core';
import { RowsTemplate } from 'components/templates';
import { RowsTemplateProps } from 'components/templates/types';
import { SectionContainer } from 'components/core/SectionContainer';
import { Courses } from 'data/courses';

import HaccpProgramGraphic from 'public/haccp/afs-haccp.jpg';
import WhatsInKit from 'public/haccp/afs-haccp-product.jpg';
import StopwatchIcon from 'public/icons/icon_stroke_green_stopwatch.svg';
import ChecklistIcon from 'public/icons/icon_stroke_green_checklist_2.svg';
import VideoIcon from 'public/icons/icon_stroke_green_video.svg';
import ResourceIcon from 'public/icons/icon_stroke_green_resources.svg';
import CalendarClockIcon from 'public/icons/icon_stroke_green_calendar_clock.svg';
import GuideIcon from 'public/icons/icon_stroke_green_guide.svg';

import { TwoCol } from 'components/core/TwoCol';

const TemplateData: Omit<RowsTemplateProps, "children"> = {
  pathname: "haccp-food-safety-plan-kit",
  displayPathname: "HACCP FOOD SAFETY PLAN KIT",
  header: <div>
    <Text className="!text-teal !mb-1 !text-2xl">The Official AIFS</Text>
    <Header1 className="text-teal mb-2">HACCP Food Safety Plan Kit</Header1>
  </div>,
  subheader: "The HACCP Food Safety Plan Kit is everything you need to build a HACCP Food Safety Plan for your business.",
  id: "haccp-page-body-section",
  sidebarType: "checkout",
  checkout: {
    course: Courses.HACCP,
    courseTitle: "HACCP Food Safety Plan Kit",
    price: "$99.95",
    showLogo: false,
    links: [
      { text: "WHAT'S INCLUDED", href: "#whats-included" },
      { text: "WHAT'S IN THE KIT?", href: "#whats-in-kit" },
      { text: "COMMON QUESTIONS", href: "#common-questions" },
    ]
  },
};

const Page = () => {
  return (
    <Layout isCoursePage={true}>
      <CoursesBackground><RowsTemplate {...TemplateData}>
        <>
          <Section1 />
          <Divider />
          <Section2 />
          <Divider />
          <WhatIsSection />
          <Divider />
          <CommonQuestionsSection />
        </>
      </RowsTemplate></CoursesBackground>
    </Layout>
  );
};

const Section1 = () => {
  return <SectionContainer id="section-haccp-hero">
    <IntroBox imageSrc={HaccpProgramGraphic} alt="haccp-program-graphic" >
      <Text>With the right Food Safety Program, you can take control of the food safety risks in your business.</Text>
      <Text>{`If you need to create a Food Safety Plan (an essential part of your Food Safety Program) but don’t know where to start, the AIFS HACCP Food Safety Plan Kit is exactly what you need.`}</Text>
      <ul>
        <ListItem>Get step-by-step instructions on how to build a custom Food Safety Plan</ListItem>
        <ListItem>Learn everything you need to know about HACCP and applying it to your business</ListItem>
        <ListItem>{`Be confident that you're building a Food Safety Plan that will be compliant`}</ListItem>
        <ListItem>Enjoy exclusive food safety resources and posters for your business</ListItem>
      </ul>
    </IntroBox>
  </SectionContainer>;
};

const Section2 = () => {
  return <SectionContainer id="whats-included">
    <TwoCol>
      <IconCard
        imageSrc={StopwatchIcon}
        title="Easy to follow"
      >
        <Text>{`By following along with the instructions in the kit, you'll significantly reduce the amount of time spent producing a Food Safety Plan.`}</Text>
      </IconCard>
      <IconCard
        imageSrc={ChecklistIcon}
        title="HACCP compliant"
      >
        <Text>The kit covers every step and principle of the HACCP food safety system used by the International Standards Organisation (ISO).</Text>
      </IconCard>
      <IconCard
        imageSrc={VideoIcon}
        title="Training videos"
      >
        <Text>{`Guided by a series of video lessons, you’ll learn everything you need to know about HACCP and creating a compliant Food Safety Plan.`}</Text>
      </IconCard>
      <IconCard
        imageSrc={ResourceIcon}
        title="HACCP plan templates"
      >
        <Text>{`You'll get a set of interactive templates to fill out which makes creating a HACCP Food Safety Plan fast and easy.`}</Text>
      </IconCard>
      <IconCard
        imageSrc={GuideIcon}
        title="Instructional guides"
      >
        <Text>The kit comes with detailed guides, step-by-step instructions and examples on how to implement HACCP in your business.</Text>
      </IconCard>
      <IconCard
        imageSrc={CalendarClockIcon}
        title="12-month access"
      >
        <Text>{`Whether you’re planning to start a food business or have already began the process, you’ll have unlimited access to the kit for one year.`}</Text>
      </IconCard>
    </TwoCol>
  </SectionContainer>;
};

const WhatIsSection = () => {
  return <SectionContainer id="whats-in-kit">
    <div className="col-span-12 pb-8 flex flex-col text-center">
      <Header3>{`What's in the kit?`}</Header3>
      <Header4 className="text-emperor">Get everything you need to build a compliant Food Safety Plan</Header4>
    </div>
    <IntroBox imageSrc={WhatsInKit} alt="food-handler-course-hero-image">
      <Text className="">By law, most food businesses in Australia are required to have a Food Safety Plan as part of their Food Safety Program. The AIFS HACCP Food Safety Plan Kit comes with all the tools you need to develop a compliant Food Safety Plan with ease.</Text>
      <Text>{`It covers all the steps and principles of HACCP and provides step-by-step instructions on how to complete your Food Safety Plan. You’ll get:`}</Text>
      <ul className={`mb-4 checklist`}>
        <ListItem>HACCP Food Safety Plan templates</ListItem>
        <ListItem>Step-by-step instructional guides</ListItem>
        <ListItem>A series of video training lessons</ListItem>
        <ListItem>A sample Food Safety Plan for reference</ListItem>
        <ListItem>A certificate of completion</ListItem>
        <ListItem>Posters and signage for your business</ListItem>
      </ul>
      <Text className="font-semibold">Start immediately or at your leisure</Text>
      <Text>{`As soon as you enrol you'll have instant access to the kit for 12 months so you can start and stop as often as you like.`}</Text>
    </IntroBox>
  </SectionContainer>;
};

const CommonQuestionsSection = () => {
  return <SectionContainer id="common-questions" className="flex flex-col">
    <div className="w-full pb-8 flex flex-col text-center">
      <Header3>Common Questions</Header3>
      <Header4 className="text-emperor">Learn more about what our students ask about this course</Header4>
    </div>
    <div className="grid grid-cols-2 grid-flow-row gap-8">
      <ExpandibleFAQ
        summary={<div className="flex flex-col gap-3 mb-3">
          <p className="font-semibold">What is a HACCP Food Safety Plan?</p>
          <p>HACCP Food Safety Plans are a set of documents designed to identify potential food safety hazards specific to an organisation and outlines corrective actions that will be taken if these hazards occur.</p>
        </div>
        }
        details={<div className="flex flex-col gap-3">
          <p>{`HACCP stands for ‘Hazard Analysis Critical Control Points’ and is a globally accepted food safety system. It is designed to prevent food safety hazards from occurring and is a legal requirement for food businesses to have in many countries.`}</p>
        </div>
        }
      />
      <ExpandibleFAQ
        summary={<div className="flex flex-col gap-3 mb-3">
          <p className="font-semibold">Why do I need a HACCP Food Safety Plan?</p>
          <p>{`In Australia, it's a legal requirement for food businesses to follow HACCP principles and to have a HACCP Food Safety Plan as part of their Food Safety Program. It helps protect the business and its customers.`}</p>
        </div>
        }
        details={<div className="flex flex-col gap-3">
          <p>{`Food Safety Plans must be kept on the premises of a food business and be updated regularly. It’s required during audits and organisations found to be not in compliance with food safety laws can be fined or face severe punishment.`}</p>
        </div>
        }
      />
      <ExpandibleFAQ
        summary={<div className="flex flex-col gap-3 mb-3">
          <p className="font-semibold">How long does it take to complete a Food Safety Plan?</p>
          <p>As each business is different, how long it takes to build a Food Safety Plan depends on you and the needs of your business.</p>
        </div>
        }
        details={<div className="flex flex-col gap-3">
          <p>For many, the step-by-step instructions in the kit are so easy to follow, a comprehensive and HACCP compliant Food Safety Plan can be built in a matter of hours or days.</p>
        </div>
        }
      />
      <ExpandibleFAQ
        summary={<div className="flex flex-col gap-3 mb-3">
          <p className="font-semibold">Will it be accepted in Australia?</p>
          <p>The HACCP Food Safety Plan Kit was developed using the principles used by the International Standards Organisation (ISO) 22000 which is accepted in Australia.</p>
        </div>
        }
        details={<div className="flex flex-col gap-3">
          <p>There is no regulatory body that governs or provides HACCP certification. Legal requirements specify that you must follow HACCP principles which this kit meets.</p>
        </div>
        }
      />
      <ExpandibleFAQ
        summary={<div className="flex flex-col gap-3 mb-3">
          <p className="font-semibold">{`What's the difference between a 'Plan' and a 'Program'?`}</p>
          <p>{`A Food Safety Plan is just one part of a Food Safety Program. A Food Safety Program is simply the implementation of your Food Safety Plan.  `}</p>
        </div>
        }
        details={<div className="flex flex-col gap-3">
          <p>{`In some government documents, the term 'program' may be used. Rest assured that the AIFS HACCP Food Safety Plan Kit meets the legal requirements for creating a plan that implements HACCP.`}</p>
        </div>
        }
      />
      <ExpandibleFAQ
        summary={<div className="flex flex-col gap-3 mb-3">
          <p className="font-semibold">What if I need help to build my Food Safety Plan?</p>
          <p>We understand that developing a Food Safety Plan can be a daunting task. If you have any questions, <a href="/contact">contact AIFS</a> and one of our trainers will be more than happy to help.</p>
        </div>
        }
        details={<div className="flex flex-col gap-3">
          <p>{`Whether it's to provide technical support for any of the components of the kit or to answer any additional questions about implementing a Food Safety Program, our team is available to assist you.`}</p>
        </div>
        }
      />
    </div>
  </SectionContainer>

};


export default Page;
