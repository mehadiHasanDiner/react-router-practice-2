import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';


const Header = () => {
    return (
        <div>
            <Navbar fixed="top" className = "navbar-style" expand="lg" variant="dark">
                <Navbar.Brand href="#home"> <Button>REST COUNTRIES </Button></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/country">Country</Nav.Link>                        
                        <Nav.Link href="/flag">Flag</Nav.Link>                        
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;