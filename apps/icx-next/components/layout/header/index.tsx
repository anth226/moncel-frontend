import Image from 'next/image';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { ComponentIccLayoutHeader } from "generated/strapi-types";

const Header = ({ data }: { data: ComponentIccLayoutHeader }) => {


    return <div className="bg-dark">
        <Navbar expand="md" className="m-0 p-0">
            <Container className="py-3">
                <Navbar.Brand href="/" className="d-flex align-items-center">
                    <Image src={data.logo?.data?.attributes?.url || ""} alt="icx-logo" width={160} height={30} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="m-0 p-0"><FontAwesomeIcon className="mobile-menu" icon={faBars} /></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto d-flex justify-content-between align-items-center">
                    {(data.links || []).map(link => {
                        if(!link) return null;
                        return <a className={`text-white ms-0 ms-md-3 ms-lg-4 mt-2 mt-md-0`} key={`header-link-${link.text}}`} href={link.href}>{link.text.toUpperCase()}</a>
                    })}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>

};

export default Header;
