import React, { useEffect } from 'react';

import Modal from 'src/components/core/Modal';
import { useAppSelector, useAppDispatch, AppActions } from 'src/store';
import Header from './header';
import Footer from './footer';

const { toggleNavbarOpen } = AppActions;

const Layout = ({ children }: { children: JSX.Element | JSX.Element[]}) => {
    const isMobileMenuOpen = useAppSelector(state => state.navbar.isMobileMenuOpen);
    const dispatch = useAppDispatch();

    useEffect(() => {
        return () => {
            setTimeout( () => dispatch(toggleNavbarOpen(false)), 50);
        }
    }, []);

    return <div>
        <Header />
            { isMobileMenuOpen ? null : children}
        { isMobileMenuOpen ? null : <Footer /> }
        <Modal />
    </div>
};

export default Layout;
