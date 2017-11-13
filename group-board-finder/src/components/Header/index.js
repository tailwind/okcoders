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
            <a href="#">Imperial Turbo Shark Rules the World</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown eventKey={3} pullRight title="Browse Group Boards" id="nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
};


export default Header
