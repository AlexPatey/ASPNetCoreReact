import React, { Component } from 'react';
import { Navbar, NavbarBrand, } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import '../index.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
          <NavbarBrand className="navBarTitle" tag={Link} to="/">Alex Patey's Tic Tac Toe</NavbarBrand>
        </Navbar>
      </header>
    );
  }
}
