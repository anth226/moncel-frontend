import React, { useEffect } from 'react';

import Modal from 'src/components/core/Modal';
import { useAppSelector, useAppDispatch, AppActions } from 'src/store';
import Header, { HeaderProps } from './header';
import Footer from './footer';

const { toggleNavbarOpen } = AppActions;

interface LayoutProps {
    headerProps?: HeaderProps;
    children: React.ReactNode;
}
const Layout = ({ headerProps, children }: LayoutProps) => {
    const isMobileMenuOpen = useAppSelector(state => state.navbar.isMobileMenuOpen);
    const dispatch = useAppDispatch();
    useEffect(() => {
        return () => {
            setTimeout( () => dispatch(toggleNavbarOpen(false)), 50);
        }
    }, []);

    return <div>
        <Header {...headerProps} />
            { isMobileMenuOpen ? null : children}
        { isMobileMenuOpen ? null : <Footer /> }
        <Modal />
    </div>
};

export default Layout;
