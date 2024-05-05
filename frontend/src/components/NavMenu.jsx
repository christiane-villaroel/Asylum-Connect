import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {Nav, Navbar,Container} from 'react-bootstrap'

const NavMenu = () =>{
   
    return(
        <>
            <Navbar>
                <Nav className="me-auto">
                    <Nav.Link>Home</Nav.Link>
                    <NavLink>other </NavLink>
                </Nav>
            </Navbar>
        </>
    )
}

export default NavMenu