import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">ADOPTATEC</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/albergue">Albergue</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/ayuda">Ayúdanos a ayudar</Link></li>
        <li><Link to="/login" className="btn btn-primary">Login/Register</Link></li>
      </ul>
    </header>
  );
};

export default Header;
