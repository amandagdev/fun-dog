import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <>
      <div className="menu">
        <Link to="/">dogs</Link>
        <Link to="/dogs">my dogs</Link>
      </div>
    </>
  );
}
