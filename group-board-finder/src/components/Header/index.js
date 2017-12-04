import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavItem, MenuItem, NavDropdown, Image } from 'react-bootstrap';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    return (
      <div>
      <Link to="/"><Image src="./tailwind-logo.png" responsive /></Link>
      
      <Navbar fluid >
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"><Image src="https://d31a41pz1c3dkr.cloudfront.net/img/tailwind-logo.indexed@2x.png" responsive style={{maxHeight: '100%'}} /></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown style={{fontWeight: "bold"}} eventKey={3} pullRight title="Browse Group Boards" id="nav-dropdown">
              {this.props.dropDownList}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  };
};


export default Header
