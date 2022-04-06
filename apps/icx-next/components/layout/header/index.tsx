import Image from 'next/image';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { StoryBlokHeader } from 'moncel-one-sdk/cms/types';

const Header = ({ header }: { header: StoryBlokHeader }) => {


    return <div className="bg-dark">
        <Navbar expand="md" className="m-0 p-0">
            <Container className="py-3">
                <Navbar.Brand href="/" className="d-flex align-items-center">
                    <Image src={header.logo.image} alt="icx-logo" width={160} height={30} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="m-0 p-0"><FontAwesomeIcon className="mobile-menu" icon={faBars} /></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto d-flex justify-content-between align-items-center">
                    {header.navigation.map(link => {
                        return <a className={`text-white ms-0 ms-md-3 ms-lg-4 mt-2 mt-md-0 ${link.class}`} key={`header-link-${link.label}}`} href={link.url}>{link.label.toUpperCase()}</a>
                    })}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>

};

export default Header;
