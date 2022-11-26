import { useState, useEffect } from 'react';
import Layout from 'components/core/Layout';
import { CoursesBackground, RowsTemplate } from 'components/Templates';
import { Text, Header1, Header3, Header4 } from 'components/core/Typography';
import Image from 'components/core/Image';
import { Courses } from 'data/courses';
import { NavigationProps, RowsTemplateProps } from 'components/Templates/types';
import useIsOnScreen from 'lib/useIsOnScreen';

import HeroGraphic from 'public/courses/cifs-course.jpg';
import IconCard from 'components/core/IconCard';
import { LogosCarousel } from 'components/core/Carousel';

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
        <Text className="!text-teal !mb-1 !text-2xl">The Official CIFS</Text>
        <Header1 className="text-teal mb-2">Food Handler Certification Course</Header1>
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
        <div className="grid grid-cols-1 md:grid-cols-2">

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

export default Page;
