import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    return (
      <Navbar fluid >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Group Board Finder</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown eventKey={3} pullRight title="Browse Group Boards" id="nav-dropdown">
              {this.props.buildDropDown()}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
};


export default Header
