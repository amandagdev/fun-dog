import React from 'react';
import './styles.css';
import logo from '../../assets/images/logo.PNG';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header__image">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header__name">funDog</div>
      </div>
    </>
  );
}
