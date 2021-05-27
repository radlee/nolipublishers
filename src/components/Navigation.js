import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand
} from 'reactstrap';

const Navigation = (props) => {

    return (
        <div className="">

            <Navbar className="navigation" dark extended="md">
                <NavbarBrand href="/">EXHORBI CONSULT & NOLI PUBLISHERS</NavbarBrand>
            </Navbar>

        </div>
    )

}

export default withRouter(Navigation);