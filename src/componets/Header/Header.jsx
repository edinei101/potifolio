// src/components/Header/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/" className="logo">
          Potifolio
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Casa</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;