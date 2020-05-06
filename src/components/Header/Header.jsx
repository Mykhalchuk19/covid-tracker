import React from 'react';
import { Link } from 'react-router-dom';

import './style.sass';

const Header = () => (
  <>
    <div className="header">
      <div className="header__wrapper">
        <a className="header__logo" href="/#">
          <span className="header__logo--black">COVID-19</span>
          {' '}
          Tracker
        </a>
        <ul className="header__nav nav__list">
          <li className="nav__item"><Link className="nav__link" to="/">Home</Link></li>
          <li className="nav__item"><Link className="nav__link" to="/daily">Daily</Link></li>
          <li className="nav__item"><Link className="nav__link" to="/places">Places</Link></li>
          <li className="nav__item"><Link className="nav__link" to="/country">Country</Link></li>
        </ul>
      </div>
    </div>
  </>
)

export default Header;
