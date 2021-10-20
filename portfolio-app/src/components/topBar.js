import React, {Component} from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default class TopBar extends Component {
    render() {
        return(
            <>
                <Navbar bg="dark" variant="dark" fixed="top">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#work-experience">Work Experience</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contact-me">Contact Me</Nav.Link>
                    </Nav>
                </Navbar>
            </>
        )

    }


}