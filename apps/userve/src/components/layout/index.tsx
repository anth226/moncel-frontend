import React from 'react';

import Header from './header';
import Footer from './footer';

const Layout = ({ children }: { children: JSX.Element | JSX.Element[]}) => {

    return <div>
        <Header />
            {children}
        <Footer />
    </div>
};

export default Layout;
