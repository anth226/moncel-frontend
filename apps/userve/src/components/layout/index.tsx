import React from 'react';

import { useAppSelector } from 'src/store';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }: { children: JSX.Element | JSX.Element[]}) => {
    const isMobileMenuOpen = useAppSelector(state => state.navbar.isMobileMenuOpen);

    return <div>
        <Header />
            { isMobileMenuOpen ? null : children}
        { isMobileMenuOpen ? null : <Footer /> }
    </div>
};

export default Layout;
