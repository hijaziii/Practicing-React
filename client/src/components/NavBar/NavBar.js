import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Navbar, NavDropdown, Nav, Button } from 'react-bootstrap';
import { logout } from '../../redux/Users/thunks';
import { useHistory } from 'react-router-dom'

const NavBar = (props) => {
    const history = useHistory()
    const authLinks = (
        <Button variant="dark" onClick={() => { props.logout() }}>
            LOGOUT
        </Button>
    );
    const guestLinks = (
        <Button variant="dark" onClick={() => { history.push('/login') }}>SIGN UP/ LOGIN</Button>
    );
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Smart Developers</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Fragment>{props.isAuthenticated ? authLinks : guestLinks}</Fragment>
                    <Nav>
                        <NavDropdown title="Projects" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">California Parking Services</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Lobby Login</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Lunde Water</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Porfolio</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#features">About US</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);



