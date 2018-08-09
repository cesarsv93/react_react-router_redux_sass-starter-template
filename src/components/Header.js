import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Logo from "../assets/img/cslogo.png";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="navbar container">
          <div className="navbar__logo">
            <Link to="/"><img className="navbar__logo-img" src={Logo} alt="Logo" /></Link>
          </div>

          <ul className="navbar__list">
            <li className="navbar__item">
              <Link className="navbar__link" to="/about">About us</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default connect(null)(Header);
