import { ReactNode, useEffect } from 'react';

import Head from './head';
import Header from './header';
import Footer from './footer';
import GlobalModal from 'components/core/Modal';
import Analytics from 'components/core/Analytics';

interface LayoutProps {
    pageTitle?: string;
    metaDescription?: string;
    className?: string;
    children: ReactNode;
    isCoursePage?: boolean;
}

const CourseCheckoutSpace = () => {
    // This adds a space on the bottom of course pages to accomodate the checkout button
    return <div className="h-24 bg-teal lg:hidden"/>
}

const Layout = ({ children, className, isCoursePage, pageTitle, metaDescription }: LayoutProps) => {
    // TODO: Mobile menu redux

    useEffect(() => {
        // global navigation logic (e.g. closing menus)
    }, []);

    return <div className={`w-full pointer-events-auto ${className || ""}`}>
        <Head title={pageTitle} description={metaDescription} />
        <Header />
            { children }
        <Footer />
        { isCoursePage == true ? <CourseCheckoutSpace/> : null }
        <GlobalModal />
        <Analytics />
    </div>;
};

export default Layout;
