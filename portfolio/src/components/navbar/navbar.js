import React from 'react';
import { Link } from "react-router-dom";
function navbar() {
  return (
    <header>
  <nav className='navbar'>
    <div className='container'>
        <div className='nav-elements'>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/offers">Angebote</Link>
                </li>
                <li>
                <Link to="/about">Über uns</Link>
                </li>
                <li>
                <Link to="/contact">Kontakt</Link>
                </li>
                <li>
                <Link to="/impressum">Impressum&Datenschutz</Link>
                </li>
                <li>
                <Link to="/upload">Bild hochladen</Link>
                </li>
            </ul>
        </div>
    </div>
  </nav>
  </header>
  );
}
export default navbar;