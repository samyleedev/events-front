import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <nav className="navbar_navigation">
        <div>
          <Link to="/">
            <img src="../../logo_large_2.png" alt="Logo de l'application" />
          </Link>
        </div>

        <ul>
          <li>CATÉGORIES</li>
          <li>AUTOUR DE MOI</li>
          <li>
            <Link to="/event-proposal">PROPOSER UN ÉVÈNEMENT</Link>
          </li>
          <li>EXPLORER</li>
        </ul>
      </nav>
      <div className="navbar_login">
        <ul>
          <li>S'INSCRIRE</li>

          <li>
            <Link to="/login">SE CONNECTER</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
