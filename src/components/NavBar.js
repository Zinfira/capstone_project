import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoctb from '../logoctb.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

class NavBar extends Component {
  render() {
    return (
      <NavBarWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to='/'>
        <img src={logoctb} alt="store" className="navbar-brand" width="105" height="80
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
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            My cart
          </ButtonContainer>
        </Link>
      </NavBarWrapper>
    );
  }
}

const NavBarWrapper = styled.nav`
  background: var(--color2);
  .nav-link{
    color:var(--grey1) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

export default NavBar;