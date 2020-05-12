import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../../../src/image/logo.jpg';
import '../NavBar/NavBar.scss';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <div>
        <Navbar fixed="top" light expand="md">
          <NavbarBrand href="/gallery"><img src={logo} width={200}></img></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto">
              <NavItem>
                <SearchBar/>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/gallery">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/hoangtrandaingoc" target="_blank">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
  );
}

export default Example;