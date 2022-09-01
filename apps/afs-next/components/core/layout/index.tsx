import { ReactNode, useEffect } from 'react';

import Head from './head';
import Header from './header';
import Footer from './footer';

interface LayoutProps {
    className?: string;
    children: ReactNode;
}

const Layout = ({ children, className }: LayoutProps) => {
    // TODO: Mobile menu redux

    useEffect(() => {
        // global navigation logic (e.g. closing menus)
    }, []);

    return <div className={`w-screen ${className || ""}`}>
        <Head />
        <Header />
            { children }
        <Footer />
    </div>;
};

export default Layout;
