import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoctb from '../logoctb.png';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5 height=80">
        <Link to='/'>
        <img src={logoctb} alt="store" className="navbar-brand" width="95" height="80
      "/>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              about us
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/products" className="nav-link">
              products
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/contacts" className="nav-link">
              contacts
            </Link>
          </li>
        </ul>
        <Link to='/cart' className="ml-auto">
          <button>
            <i className="fas fa-cart-plus" />
            My cart
          </button>
        </Link>
      </nav>
    );
  }
}

export default NavBar;