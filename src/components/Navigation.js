import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
} from 'reactstrap';

const Navigation = (props) => {


    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="">

            <Navbar className="navigation" dark extended="md">
                <NavbarBrand href="/" className="a">NOLI PUBLISHERS</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#gallery">Gallery</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#services">Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#team">Team</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>NOLI PUBLISHERS</NavbarText>
                </Collapse>
            </Navbar>

        </div>
    )

}

export default withRouter(Navigation);