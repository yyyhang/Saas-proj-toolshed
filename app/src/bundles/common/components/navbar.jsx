import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import SearchBar from "./searchbar.jsx"
import logo from './logo.png';

class NavBar1 extends Component {
  render() {
    return (
      <React.Fragment>
       <Navbar className="topnav">
          <Nav className="mr-auto" activeKey="/home">
            <Link to="/">
            
              <Navbar.Brand bsPrefix="topnav a">
                  <img
                  src={logo}
                  width="45"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                  />
              </Navbar.Brand>
            </Link>
            <Navbar.Brand bsPrefix="topnav a" href="/">The ToolShed</Navbar.Brand>
            <NavDropdown bsPrefix="topnav a" title="Knowledge Base" id="nav-dropdown">
                <NavDropdown.Item className="topnav a" href="/tools">Tools</NavDropdown.Item>
                <NavDropdown.Item className="topnav a" href="/categories">Categories</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link bsPrefix="topnav a" href="/blogs">Blogs</Nav.Link>
          </Nav>
          <Nav className="justify-content-center" activeKey="/home">
            <SearchBar />
          </Nav>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Link bsPrefix="topnav a" href="/login">Sign Up/Login</Nav.Link>
          </Nav>
      </Navbar>
      </React.Fragment>
    );
  }
}
 
export default NavBar1;
