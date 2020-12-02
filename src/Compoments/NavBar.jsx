import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavBar = () => {
return(  
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">OMDB API</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Link to ="/movieReq">
                <Nav.Link href="#home">Movie Requests</Nav.Link>
            </Link>
            <Link to ="/about">
                <Nav.Link href="#home">About</Nav.Link>
            </Link>
            <Link to ="/">
                <Nav.Link href="#home">Exit</Nav.Link>
            </Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);
}
export default NavBar;