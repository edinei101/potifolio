// src/components/Footer/Footer.jsx
import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2023 Potifolio. Todos os direitos reservados.</p>
      <ul className="social-links">
        <li>
          <a href="https://github.com/edinei101/" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://br.linkedin.com/in/edinei-vicente-de-carvalho-b3789b36?trk=people-guest_people_search-card" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:edineivcs@gmail.com">
            E-mail
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;