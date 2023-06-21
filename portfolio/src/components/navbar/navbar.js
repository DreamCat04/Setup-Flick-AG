import React from 'react';
import { Link } from "react-router-dom";
function navbar() {
  return (
  <nav>
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
  </nav>
  );
}
export default navbar;