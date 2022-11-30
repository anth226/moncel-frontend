import { useState, useEffect, ReactNode } from 'react';
import NextLink from 'next/link';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

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
import ImageBannerCard from 'components/core/ImageBannerCard';
import ExpandibleFAQ from 'components/core/ExpandibleFAQ';
import { CollapsibleTableCell, CollapsibleCellGroup } from 'components/core/CollapsibleTable';

import GuidesGraphic from 'public/cifs-guides.jpg';
import AlertsGraphic from 'public/cifs-alerts.jpg';
import ChecklistGraphic from 'public/cifs-check.jpg';

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
        <Text className="!mb-1 !text-2xl !text-bunting">The Official CIFS</Text>
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
                    <MembershipSection />
                    <Divider />
                    <CommonQuestionsSection />
                    <Divider />
                </>
            </RowsTemplate>
        </CoursesBackground>
    </Layout>;

};

const HeroSection = () => {
    return <div className="col-span-3 grid grid-cols-12 gap-7 text-bunting" id="hero-section">
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
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 gap-y-8 text-bunting">
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
        <div className="w-full flex flex-col items-center pb-7 text-bunting">
            <Header3 className="!text-monza">Course outline</Header3>
            <Header4 className="!text-bunting">Everything you need to become a Certified Food Handler, all in one course.</Header4>
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
                <div dangerouslySetInnerHTML={{
                    __html: `<div class="wistia_responsive_padding" style="padding:75.0% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/jxt4z03owg?seo=false&videoFoam=true" title="CFS_Course_Demo_CoursePage Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe></div></div>
                <script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>`}} />
            </div>
            <div className="flex flex-col">
                <CollapsibleCellGroup initialIndex={0}>
                    <CollapsibleTableCell
                        summary={<p className="uppercase hover:underline">Course Outline</p>}
                        details={<>
                            <div className="font-semibold">
                                <p>Module one:</p>
                                <p>Understanding food safety</p>
                            </div>
                            <p>Lesson 1 - Understanding food contamination</p>
                            <p>Lesson 2: Food-borne illness {`&`} allergy management</p>
                            <p>Lesson 3: Food safety laws {`&`} responsibilities</p>

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
                                <p>Module Four:</p>
                                <p>Managing your food safety plan</p>
                            </div>
                            <p>Lesson 11 - Managing your food safety plan</p>

                        </>}
                        detailsClasses={{ root: '!p-4 bg-lilac' }} />
                    <CollapsibleTableCell
                        summary={<p className="uppercase hover:underline">Certification Process</p>}
                        details={
                            <>
                                <Text>{`To successfully obtain your CIFS Food Handler Certification, you’re required to complete each lesson and pass a final exam within 30 days.`}</Text>
                                <Text>{`The final exam has 50 multiple choice questions and a 60 minute time limit. A minimum score of 70% is required to pass the exam. You have unlimited attempts to write the final exam during your 30 day course access period.`}</Text>
                                <Text>{`By law, the test requires proctoring. A Proctor is a person who remotely observes you via a webcam while you complete the exam. Proctors are available 24 hours a day, 7 days a week, allowing you to complete the exam at any time. Simply choose a time that suits you and get started.`}</Text>
                            </>
                        }
                        detailsClasses={{ root: '!p-4 bg-lilac' }} />

                    <CollapsibleTableCell
                        summary={<p className="uppercase hover:underline">Technical Requirements</p>}
                        details={
                            <>
                                <Text>{`The course can be completed on your mobile phone, tablet or computer. You will need to have a modern web browser and it’s important that you have Javascript enabled. The final exam (which takes only one hour) requires a computer with a webcam, microphone and a reliable internet connection. `}</Text>
                                <Text>In order to access course resources, some students are prompted to download Adobe PDF Reader or Adobe Acrobat (both programs are free). We recommend <a href="font-semibold" target="_blank">downloading the latest version of Adobe PDF Reader.</a></Text>
                                <Text><NextLink href="/contact"><a className="font-semibold">Contact us</a></NextLink> {`if you have any concerns about the technical requirements for the final exam. Our support team can help troubleshoot or even help you find a computer with a webcam to ensure taking your final exam is a smooth process.`}</Text>
                            </>
                        }
                        detailsClasses={{ root: '!p-4 bg-lilac' }} />

                    <CollapsibleTableCell
                        summary={<p className="uppercase hover:underline">Provinces and Territories</p>}
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
        <div className="w-full flex flex-col items-center pb-8 text-center text-bunting">
            <Header3 className="!text-monza">More than just a course</Header3>
            <Header3 className="!text-bunting">CIFS Membership gives you the tools you need to implement food safety.</Header3>
        </div>
        <div className="w-full grid items-start grid-cols-1 md:grid-cols-3 gap-8">
            <Accordion square disableGutters className="border border-mint !shadow-none featured" classes={{ root: 'bg-lilac' }}>
                <AccordionSummary id="food-handler-course-benefits-card-1" className="w-full m-0 p-0" classes={{ root: '!p-0 !m-0', content: '!p-0 !m-0 !flex !flex-col' }}>
                    <ImageBannerCard
                        title="Guides, Posters & Fact Sheets"
                        description="Implement food safety best practices with easy-to-understand guides, printable posters, fact sheets and videos."
                        imageSrc={GuidesGraphic} />
                    <AccordionDetails className="m-0 pl-4 pr-4 pb-4">
                        <Text className="!text-bunting">Our members-only guides, posters and fact sheets help you to reinforce food safety knowledge and concepts, and maintain high standards of food safety at all times. </Text>
                    </AccordionDetails>
                </AccordionSummary>
            </Accordion>

            <Accordion square disableGutters className="border border-mint !shadow-none featured" classes={{ root: 'bg-lilac' }}>
                <AccordionSummary id="food-handler-course-benefits-card-2" className="w-full m-0 p-0" classes={{ root: '!p-0 !m-0', content: '!p-0 !m-0 !flex !flex-col' }}>
                    <ImageBannerCard
                        title="Food Safety Updates"
                        description="Stay up-to-date on food recalls and changes to food safety laws with our food safety updates and newsletters."
                        imageSrc={AlertsGraphic} />
                    <AccordionDetails className="m-0 pl-4 pr-4 pb-4">
                        <Text className="!text-bunting">Get important updates on the latest food recalls to ensure unsafe food is removed from your inventory before it can cause a customer to fall ill.</Text>
                    </AccordionDetails>
                </AccordionSummary>
            </Accordion>
            <Accordion square disableGutters className="border border-mint !shadow-none featured" classes={{ root: 'bg-lilac' }}>
                <AccordionSummary id="food-handler-course-benefits-card-1" className="w-full m-0 p-0" classes={{ root: '!p-0 !m-0', content: '!p-0 !m-0 !flex !flex-col' }}>
                    <ImageBannerCard
                        title="Checklists and Templates"
                        description="Feel confident that your Food Safety Plan is consistently applied with our checklists, sign-off sheets and more. "
                        imageSrc={ChecklistGraphic} />
                    <AccordionDetails className="m-0 pl-4 pr-4 pb-4">
                        <Text className="!text-bunting">{`Checklists, sign-off sheets, cleaning schedules and other forms are an integral part of any Food Safety Plan. We've done the work for you — all you have to do is print and fill them out!`}</Text>
                    </AccordionDetails>
                </AccordionSummary>
            </Accordion>
        </div>
    </div>;
};

const CommonQuestionsSection = () => {
    return <div className="col-span-3" id={ANCHOR_IDS.commonQuestions}>
        <div className="w-full flex flex-col items-center pb-8 text-center text-bunting">
            <Header3 className="!text-monza">Common questions</Header3>
            <Header3 className="!text-bunting">Learn more about what our students ask about this course.</Header3>
        </div>
        <div className="grid grid-cols-2 grid-flow-row gap-8">
            <ExpandibleFAQ
                summary={<div className="flex flex-col gap-3 mb-3">
                    <p className="font-semibold">Are there any hidden costs?</p>
                    <p>No there are no other fees. The fee of $99.95 (plus GST/HST) includes everything you need to get certified. This includes:</p>
                </div>
                }
                details={<div className="flex flex-col gap-3">
                    <ul className="checklist">
                        <li>the course</li>
                        <li>final exam proctoring</li>
                        <li>unlimited final exam attempts</li>
                        <li>the official CIFS Food Handler Certificate</li>
                        <li>all required course learning resources</li>
                    </ul>
                </div>
                }
            />
            <ExpandibleFAQ
                summary={<div className="flex flex-col gap-3 mb-3">
                    <p className="font-semibold">Is the course 100% online?</p>
                    <p>The online lessons and multiple choice quizzes take most people around 8 hours to complete.</p>
                </div>
                }
                details={<div className="flex flex-col gap-3">
                    <p>{`This can vary depending on your food handling experience, English language skills and computer literacy.`}</p>
                    <p>{`You don’t need to complete the whole course at once – you can start and stop as often as you need. The course software will remember where you’re up to and will prompt you to resume where you left off.`}</p>
                    <p>{`The final exam works slightly differently. A Certified Proctor will supervise your exam remotely via a webcam on your computer – there’s no need to book in advance as sessions are available 24 hours a day, 7 days a week.`}</p>
                    <p>{`You have 30 days from the date of enrolment to complete the course in its entirety, including the final exam.`}</p>
                </div>
                }
            />
            <ExpandibleFAQ
                summary={<div className="flex flex-col gap-3 mb-3">
                    <p className="font-semibold">How long does the course take?</p>
                    <p>HACCP Food Safety Plans are a set of documents designed to identify potential food safety hazards specific to an organisation and outlines corrective actions that will be taken if these hazards occur.</p>
                </div>
                }
                details={<div className="flex flex-col gap-3">
                    <p>{`You complete all of the lessons and quizzes online. Your final assessment is an online test which you are observed completing by a Certified Proctor via a webcam in your computer.`}</p>
                    <p>{`There's no need to visit any classrooms or exam centres when you complete a CIFS course.`}</p>

                </div>
                }
            />
            <ExpandibleFAQ
                summary={<div className="flex flex-col gap-3 mb-3">
                    <p className="font-semibold">Where can I complete my final exam?</p>
                    <p>We recommend completing your exam in a quiet place with no one around.</p>
                </div>
                }
                details={<div className="flex flex-col gap-3">
                    <p>{`If your family or coworkers are within the vicinity of where you’re taking the exam, post a note to let them know what you’re doing and explain to them that you’re engaged in a proctored exam and can’t be distracted or disturbed.`}</p>
                    <p>{`If you’re taking your exam in a library, coffee shop or office, try to ensure no-one is visible in the background while you attempt the exam.`}</p>
                </div>
                }
            />
            <ExpandibleFAQ
                summary={<div className="flex flex-col gap-3 mb-3">
                    <p className="font-semibold">What skills do I need to complete the course?</p>
                    <p>The course content is delivered via an automated slide pack, audio narration and course handouts. This allows for us to accommodate students that prefer to learn by reading, listening or watching.</p>
                </div>
                }
                details={<div className="flex flex-col gap-3">
                    <p className="semibold text-monza">Language, literacy and numeracy skills</p>
                    <p>{`While we’ve tried to keep the course as simple as possible, there are some technical food safety terms that we do our best to explain. There are also some numerical skills required to read temperatures and perform simple calculations.`}</p>
                    <p>{`As a general rule, if you can perform the following tasks then you have the language, literacy and numeracy skills to complete the course:`}</p>
                    <ol>
                        <li>Use an instant messenger tool</li>
                        <li>Use email for work purposes</li>
                        <li>Respond to customer complaints</li>
                        <li>Follow a recipe</li>
                    </ol>
                    <p>At present, our course is available in English only.</p>

                    <p className="semibold text-monza">Computer skills</p>
                    <p>This is an online course; a basic level of computer literacy is required.</p>
                    <p>{`You will be required to log in to the course and navigate through the lessons on the online course page. You’ll also receive some information via email so you’ll need to be familiar with the use of your preferred email system.`}</p>
                    <p>You will also need to download the PDF resources on the course page – this will require the use of Adobe Reader or similar (installed on most computers).</p>
                    <p>{`If you’re able to browse the internet and send and reply to emails, then you’re likely to have the computer skills required to complete this course.`}</p>

                    <p className="semibold text-monza">Independent study skills</p>
                    <p>This course is an online self-paced course which means that you can study when you want, where you want – but you must complete the course within 30 days of enrolment.</p>
                    <p>{`This type of course requires some planning and organization from the student. As there are no scheduled times and sessions, you’ll need to make sure that you allocate adequate time to complete the course. You’ll also need to consider the best way to study and learn using the online tools. Some students like to take lots of notes with a pen and paper, others like to watch the lessons multiple times to let the information sink in.`}</p>
                    <p>{`It’s a good idea to consider how you’ll approach a self-paced online training course before enrolling.`}</p>
                    <p>{`If you have any concerns about any of the skills required, please`} <NextLink href="/contact" className="underline font-bold cursor-pointer">contact us</NextLink> {`and we’ll be happy to discuss your situation.`}</p>

                </div>
                }
            />
            <ExpandibleFAQ
                summary={<div className="flex flex-col gap-3 mb-3">
                    <p className="font-semibold">Can you tell me more about the final exam?</p>
                    <p>The final exam has 50 multiple choice questions and a 60-minute time limit. A minimum score of 70% is required to pass the exam. You have an unlimited number of attempts at writing the exam.</p>
                </div>
                }
                details={<div className="flex flex-col gap-3">
                    <p>{`The final exam requires proctoring. A Proctor is a person who remotely observes while you complete the exam. We have proctors available 24 hours a day, 7 days a week, allowing you to complete the exam at any time that suits you.`}</p>
                    <p>{`Before starting your exam, the Proctor will need to confirm your identity. To verify your identity, you will need to follow the two steps below: `}</p>
                    <ol>
                        <li>{`Provide valid government-issued photo ID. The ID can be from any country, some examples are, driver’s licence, passport, health card, student card or citizenship. (For underage learners, student ID will be accepted). `}</li>
                        <li>{`The Proctor will take your photo. The photo will match the picture on the government-issued photo ID you have provided. `}</li>
                    </ol>
                    <p>Once your identity is validated, you can begin the exam. </p>
                    <p>You have unlimited attempts to attempt the exam, unless you are suspected of cheating. If you are found to have cheated in your exam then you will be removed from the course and will need to re-enrol and pay for a new course.</p>
                    <p>To avoid accusations of cheating, never do the following immediately before or during your exam: </p>
                    <ol>
                        <li>Have your mobile device, tablet or additional laptop or computer with you or within your reach.</li>
                        <li>Have any paper or notebooks open or accessible, or take notes or screenshots.</li>
                        <li>Interact with or be within close proximity of friends, family or coworkers.</li>
                        <li>Open additional browser windows or have your computer or laptop on split or multiple screen modes. </li>
                        <li>Have any instant messaging apps open (example: Slack or Google Hangouts).</li>
                        <li>Leave or turn away from your computer (try to keep your gaze on the screen and keyboard only). </li>
                        <li>Wear headphones or any earpiece. </li>
                    </ol>
                    <p>{`Once you’ve passed the exam, you can request your certificate to be emailed immediately. Most students receive their certificate within 60 minutes of completing the exam.`}</p>
                </div>
                }
            />
            <ExpandibleFAQ
                summary={<div className="flex flex-col gap-3 mb-3">
                    <p className="font-semibold">How do I get my Food Handler Certificate?</p>
                    <p>You can request your Food Handler Certificate immediately after completing your exam. Most students receive their documents within 60 minutes.</p>
                </div>
                }
                details={<div className="flex flex-col gap-3">
                    <p>{`We recommend that you print and save a copy of your certificate so that you can easily access it in future. Your access to the course expires after 30 days. It’s important to ensure you have a saved copy before this date.`}</p>
                </div>
                }
            />
            <ExpandibleFAQ
                summary={<div className="flex flex-col gap-3 mb-3">
                    <p className="font-semibold">Do you accommodate people with special needs?</p>
                    <p>{`We’ve designed our course to try and accommodate for as many requirements as possible. This includes students with disabilities, or with language/literacy needs.`}</p>
                </div>
                }
                details={<div className="flex flex-col gap-3">
                    <p>{`The course materials are delivered via interactive lessons, via audio and also via downloadable course notes. We’ve done this to try and make the course as accessible as possible.`}</p>
                    <p>{`Once enrolled in the course, students are also able to interact with a qualified food safety trainer via email or telephone. If other tools such as video conferencing are required, this can be arranged.`}</p>
                    <p>Please <NextLink href="/contact"><a className="font-bold underline cursor-pointer">contact us</a></NextLink> with any concerns and {`we’ll`} do our best to accommodate any special requirements.</p>
                </div>
                }
            />
        </div>
    </div>;
};

const Divider = () => <div className="w-full col-span-3 border-t-[1px] border-catskill" />
export const ListItem = ({ children }: { children?: ReactNode }) => <li className="mb-2 last:mb-0">{children}</li>;

export default Page;
