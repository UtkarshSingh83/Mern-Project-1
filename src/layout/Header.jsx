import { Link } from "react-router-dom";
import './Header.css';

import React, { useState } from "react";
import {
    Button,
    Collapse,
    Container,
    Form,
    InputGroup,
    Nav,
    Navbar,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const routes = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#" },
    { name: "Why us?", href: "#" },
    { name: "LogIn", href: "/Login" },
];

const NavMenu = ({ routes, children }) => (
    <Nav className="ms-auto mb-2 mb-lg-0 mt-4 mt-lg-0">
        {routes.map((route, i) => (
            <Nav.Item key={i}>
                <Nav.Link href={route.href}>{route.name}</Nav.Link>
            </Nav.Item>
        ))}
        {children}
    </Nav>
);

NavMenu.propTypes = {
    routes: PropTypes.array.isRequired,
    children: PropTypes.node,
};

const SearchForm = () => (
    <Form className="mt-4">
        <InputGroup>
            <Form.Control type="search" placeholder="City, Address, Zip" />
            <Button variant="" className="ezy__nav7-btn px-3" type="submit">
                Search
            </Button>
        </InputGroup>
    </Form>
);

const Header = () => {
    const [isOpenSearch, setIsOpenSearch] = useState(false);

    const toggleSearch = () => setIsOpenSearch(!isOpenSearch);
    return (
        <>
            <div className="ezy__nav7 light">
                <Navbar expand="lg" className="flex-column py-3">
                    <Container>
                        <Navbar.Brand href="#">React-App</Navbar.Brand>
                        <Navbar.Toggle aria-controls="ezy__nav7-navbar-nav">
                            <span>
                                <span />
                            </span>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="ezy__nav7-navbar-nav">
                            <NavMenu routes={routes}>
                                <Nav.Item>
                                    <Nav.Link href="#" onClick={toggleSearch}>
                                        <FontAwesomeIcon icon={faSearch} />
                                    </Nav.Link>
                                </Nav.Item>
                            </NavMenu>
                        </Navbar.Collapse>
                    </Container>
                    <Container>
                        <Collapse in={isOpenSearch} className="w-100">
                            <div>
                                <SearchForm />
                            </div>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}

export default Header