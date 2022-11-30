import { useState, useEffect, ReactNode } from 'react';
import NextLink from 'next/link';
import Layout from 'components/core/Layout';
import { CoursesBackground, RowsTemplate } from 'components/Templates';
import { Text, Header1, Header3, Header4, P } from 'components/core/Typography';
import Image from 'components/core/Image';
import { Courses } from 'data/courses';
import { NavigationProps, RowsTemplateProps } from 'components/Templates/types';
import useIsOnScreen from 'lib/useIsOnScreen';

import HeroGraphic from 'public/courses/cifs-course.jpg';
import IconCard from 'components/core/IconCard';
import { LogosCarousel } from 'components/core/Carousel';
import { CollapsibleTableCell, CollapsibleCellGroup } from 'components/core/CollapsibleTable';

const ANCHOR_IDS = {
    intro: "intro",
    courseOutline: "course-outline",
    freeMembership: "free-membership",
    commonQuestions: "common-questions",
};

export const navigationData: NavigationProps = {
    title: "Food Safety Courses",
    links: [
        { text: 'Overview', href: '/courses' },
        { text: 'Food Safety Supervisor', href: '/courses/food-safety-supervisor' },
        { text: 'Food Handler Course', href: '/courses/food-handler-course' },
        { text: 'NSW Recertification', href: '/courses/nsw-recertification' },
        { text: 'Food Safety Manager', href: '/courses/food-safety-manager' },
        { text: 'Introduction to Food Safety', href: 'courses/introduction-to-food-safety-course' }
    ],
};

const TemplateData: Omit<RowsTemplateProps, "children"> = {
    id: 'food-handler-certification-course-body',
    navigation: navigationData,
    pathname: "courses/food-handler-certification-course",
    displayPathname: "FOOD SAFETY COURSES/FOOD HANDLER CERTIFICATION COURSE",
    header: <div>
        <Text className="!mb-1 !text-2xl">The Official CIFS</Text>
        <Header1 className="mb-2">Food Handler Certification Course</Header1>
    </div>,
    subheader: "The industry standard for Food Handler Certification in Canada. Enrol and get certified today.",
    sidebarType: "checkout",
    checkout: {
        course: Courses.FoodHandler,
        courseTitle: "Food Handler Certification Course",
        price: "$99.95",
        memberPrice: "FREE",
        showLogo: true,
        links: [
            { text: "WHAT'S INCLUDED", href: `#${ANCHOR_IDS.intro}` },
            { text: "COURSE OUTLINE", href: `#${ANCHOR_IDS.courseOutline}` },
            { text: "INDUSTRY SECTORS", href: `#${ANCHOR_IDS.freeMembership}` },
            { text: "COMMON QUESTIONS", href: `#${ANCHOR_IDS.commonQuestions}` },
        ]
    },
};

const Page = () => {
    const [anchor, setAnchor] = useState<string | undefined>(undefined);
    const introScrollRef = useIsOnScreen(ANCHOR_IDS.intro);
    const courseOutlineScrollRef = useIsOnScreen(ANCHOR_IDS.courseOutline)
    const freeMembershipScrollRef = useIsOnScreen(ANCHOR_IDS.freeMembership);
    const commonQuestionsScrollRef = useIsOnScreen(ANCHOR_IDS.commonQuestions);

    // handle hash scrolling
    useEffect(() => {
        const newHashStr = introScrollRef || courseOutlineScrollRef || freeMembershipScrollRef || commonQuestionsScrollRef;

        if (newHashStr) {
            window.history.pushState({}, document.title, `#${newHashStr}`);
            setAnchor(`#${newHashStr}`);
        }
        const handleHashChange = () => {
            window.requestIdleCallback(() => setAnchor(window.location.hash));
        };
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashChange', handleHashChange);
        }
    }, [introScrollRef, courseOutlineScrollRef, freeMembershipScrollRef, commonQuestionsScrollRef]);
    return <Layout>
        <CoursesBackground>
            <RowsTemplate {...TemplateData} anchor={anchor}>
                <>
                    <HeroSection />
                    <Divider />
                    <IntroSection />
                    <Divider />
                    <LogosSection />
                    <Divider />
                    <CourseOutlineSection />
                    <Divider />
                </>
            </RowsTemplate>
        </CoursesBackground>
    </Layout>;

};

const HeroSection = () => {
    return <div className="col-span-3 grid grid-cols-12 gap-7" id="hero-section">
        <div className="col-span-12 md:col-span-5">
            <div className="relative w-full aspect-video"><Image src={HeroGraphic} layout="fill" objectFit="cover" /></div>
        </div>
        <div className="col-span-12 md:col-span-7 checklist flex flex-col gap-4">
            <p>In Canada, Food Handler Certification is a legal requirement for many food workers. When you study online with CIFS, you can:</p>
            <ul>
                <li>control when and where you study</li>
                <li>get certified on the same day or take your time</li>
                <li>write the final exam as many times as needed</li>
                <li>be confident your qualification is government-approved</li>
                <li>stay up-to-date with a complimentary CIFS membership</li>
            </ul>
        </div>

    </div>
}
const IntroSection = () => {
    return <div className="col-span-3" id={ANCHOR_IDS.intro}>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 gap-y-8">
            <IconCard
                imageSrc={"/icons/icon_stroke_laptop.svg"}
                title="100% online">
                <Text>Access the course on any device with an internet connection and complete your final exam on a computer anywhere, anytime.</Text>
            </IconCard>
            <IconCard
                imageSrc={"/icons/icon_stroke_calendar_clock.svg"}
                title="Same day certification">
                <Text>Complete training and take your final exam on the same day (or take up to 30 days). Receive your certificate within minutes of passing the final exam.</Text>
            </IconCard>
            <IconCard
                imageSrc={"/icons/icon_stroke_telephone.svg"}
                title="1-on-1 support">
                <Text>Get help when you need it. Our team is available by phone or email to help with technical support, enrolment, payment and learning challenges.</Text>
            </IconCard>
            <IconCard
                imageSrc={"/icons/icon_stroke_maple.svg"}
                title="Nationally recognized">
                <Text>CIFS Certification is approved across Canada, which means there’s no need to recertify to work in different provinces or territories.</Text>
            </IconCard>
            <IconCard
                imageSrc={"/icons/icon_stroke_member.svg"}
                title="12 months of free CIFS Membership">
                <Text>Get help when you need it. Our team is available by phone or email to help with technical support, enrolment, payment and learning challenges.</Text>
            </IconCard>
            <IconCard
                imageSrc={"/icons/icon_stroke_checkmark_box_stroke_tick.svg"}
                title="Unlimited exam attempts">
                <Text>{`There's no need to worry about not passing the final exam on the first try. You can retake the exam as many times as needed for free.`}</Text>
            </IconCard>
        </div>
    </div>;
};

const LogosSection = () => {
    return <div className="col-span-3" id="trusted-by-logos-section">
        <div className="w-full flex justify-center pb-7"><Header3 className="text-monza">Trusted by the Canadian Food Industry</Header3></div>
        <LogosCarousel />
    </div>;
};

const CourseOutlineSection = () => {
    return <div className="col-span-3" id={ANCHOR_IDS.courseOutline}>
        <div className="w-full flex flex-col items-center pb-7">
            <Header3 className="text-monza">Course outline</Header3>
            <Header4 className="text-bunting">Everything you need to become a Certified Food Handler, all in one course.</Header4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7">
            <div className="flex flex-col text-bunting gap-4">
                <p>The Food Handler Certification Course is divided into four easy to follow modules.</p>
                <p>{`Each module has a series of lessons. Throughout the course, we keep you engaged and help you retain what you’ve learned with: `}</p>
                <ul className="checklist">
                    <li>useful study notes and fact sheets </li>
                    <li>interactive learning activities </li>
                    <li>interesting videos</li>
                </ul>
                <p>Our software features user-friendly navigation, requiring minimal training and quick onboarding.</p>
                <p>{`Click on the 'Play' button below to watch a demo of the Food Handler Certification course.`}</p>
                <div dangerouslySetInnerHTML={{ __html: `<div class="wistia_responsive_padding" style="padding:75.0% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/jxt4z03owg?seo=false&videoFoam=true" title="CFS_Course_Demo_CoursePage Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe></div></div>
                <script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>`}} />
            </div>
            <div className="flex flex-col">
                <CollapsibleCellGroup initialIndex={0}>
                    <CollapsibleTableCell
                        summary={<p className="uppercase">Course Outline</p>}
                        details={<>
                            <div className="font-semibold">
                                <p>Module one:</p>
                                <p>Understanding food safety</p>
                            </div>
                            <p>Lesson 1 - Food Safety Laws {`&`} Responsibilities</p>
                            <p>Lesson 2 - Food Contamination {`&`} High-Risk Groups</p>
                            <p>Lesson 3 - Types of Contamination</p>

                            <div className="font-semibold mt-4">
                                <p>Module two:</p>
                                <p>Preventing food-borne illness</p>
                            </div>
                            <p>Lesson 4 - Personal hygeine {`&`} workspace behaviour</p>
                            <p>Lesson 5 - Time {`&`} temperature control</p>
                            <p>Lesson 6 - Cleaning {`&`} sanitizing</p>
                            <p>Lesson 7 - Maintaining food premises {`&`} equipment</p>

                            <div className="font-semibold mt-4">
                                <p>Module three:</p>
                                <p>Working with food safely</p>
                            </div>
                            <p>Lesson 8 - Purchasing, receiving {`&`} storing food safely</p>
                            <p>Lesson 9 - Preparing food safely</p>
                            <p>Lesson 10 - Serving {`&`} dispensing food safely</p>

                            <div className="font-semibold mt-4">
                                <p>Module Four</p>
                                <p>Managing your food safety plan</p>
                            </div>
                            <p>Lesson 11 - Managing your food safety plan</p>

                        </>}
                        detailsClasses={{ root: '!p-4 bg-lilac' }} />
                    <CollapsibleTableCell
                        summary={<p className="uppercase">Certification Process</p>}
                        details={
                            <>
                                <Text>{`To successfully obtain your CIFS Food Handler Certification, you’re required to complete each lesson and pass a final exam within 30 days.`}</Text>
                                <Text>{`The final exam has 50 multiple choice questions and a 60 minute time limit. A minimum score of 70% is required to pass the exam. You have unlimited attempts to write the final exam during your 30 day course access period.`}</Text>
                                <Text>{`By law, the test requires proctoring. A Proctor is a person who remotely observes you via a webcam while you complete the exam. Proctors are available 24 hours a day, 7 days a week, allowing you to complete the exam at any time. Simply choose a time that suits you and get started.`}</Text>
                            </>
                        }
                        detailsClasses={{ root: '!p-4 bg-lilac' }} />

                    <CollapsibleTableCell
                        summary={<p className="uppercase">Technical Requirements</p>}
                        details={
                            <>
                                <Text>{`The course can be completed on your mobile phone, tablet or computer. You will need to have a modern web browser and it’s important that you have Javascript enabled. The final exam (which takes only one hour) requires a computer with a webcam, microphone and a reliable internet connection. `}</Text>
                                <Text>In order to access course resources, some students are prompted to download Adobe PDF Reader or Adobe Acrobat (both programs are free). We recommend <a href="font-semibold" target="_blank">downloading the latest version of Adobe PDF Reader.</a></Text>
                                <Text><NextLink href="/contact"><a className="font-semibold">Contact us</a></NextLink> {`if you have any concerns about the technical requirements for the final exam. Our support team can help troubleshoot or even help you find a computer with a webcam to ensure taking your final exam is a smooth process.`}</Text>
                            </>
                        }
                        detailsClasses={{ root: '!p-4 bg-lilac' }} />

                    <CollapsibleTableCell
                        summary={<p className="uppercase">Provinces and Territories</p>}
                        details={
                            <>
                                <Text>{`The CIFS Food Handler Certification course is approved/accepted in every province and territory across Canada:`}</Text>
                                <ul className="font-semibold">
                                    <li><NextLink href="/laws-requirements/by-location/alberta"><a>Alberta</a></NextLink> </li>
                                    <li><NextLink href="/laws-requirements/by-location/british-columbia"><a>British Columbia</a></NextLink> </li>
                                    <li><NextLink href="/laws-requirements/by-location/manitoba"><a>Manitoba</a></NextLink> </li>
                                    <li><NextLink href="/laws-requirements/by-location/new-brunswick"><a>New Brunswick</a></NextLink> </li>
                                    <li><NextLink href="/laws-requirements/by-location/newfoundland"><a>Newfoundland and Labrador</a></NextLink> </li>
                                    <li><NextLink href="/laws-requirements/by-location/nwt"><a>Northwest Territories</a></NextLink> </li>
                                    <li><NextLink href="/laws-requirements/by-location/nova-scotia"><a>Nova Scotia</a></NextLink> </li>
                                    <li><NextLink href="/laws-requirements/by-location/nunavut"><a>Nunavut</a></NextLink> </li>
                                    <li><NextLink href="/laws-requirements/by-location/ontario"><a>Ontario</a></NextLink> </li>
                                    <li><NextLink href="/laws-requirements/by-location/pei"><a>Prince Edward Island</a></NextLink> </li>
                                    <li><NextLink href="/laws-requirements/by-location/quebec"><a>Quebec</a></NextLink> </li>
                                    <li><NextLink href="/laws-requirements/by-location/saskatchewan"><a>Saskatchewan</a></NextLink> </li>
                                    <li><NextLink href="/laws-requirements/by-location/yukon"><a>Yukon</a></NextLink> </li>
                                </ul>
                            </>
                        }
                        detailsClasses={{ root: '!p-4 bg-lilac' }} />
                </CollapsibleCellGroup>

            </div>
        </div>

    </div>;
};

const MembershipSection = () => {
    return <div className="col-span-3" id={ANCHOR_IDS.freeMembership}>

    </div>;
};

const CommonQuestionsSection = () => {
    return <div className="col-span-3" id={ANCHOR_IDS.commonQuestions}>

    </div>;
};

const Divider = () => <div className="w-full col-span-3 border-t-[1px] border-catskill" />
export const ListItem = ({ children }: { children?: ReactNode }) => <li className="mb-2 last:mb-0">{ children }</li>;

export default Page;
