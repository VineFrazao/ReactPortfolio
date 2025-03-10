import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

import git from "../../assets/icons/git.png";
import linkedin from "../../assets/icons/linke.png";
import email from "../../assets/icons/mail.png";
import whatsapp from "../../assets/icons/whats.png";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <nav className="navegacao">
          <NavLink to="/">Vinícius</NavLink>
          <NavLink to="/Educacao">Educação</NavLink>
          <NavLink to="/Experiencia">Experiência</NavLink>
        </nav>

        <div className="links">
          <a href="https://github.com/VineFrazao?tab=repositories">
            <img src={git} alt="GitHub Repositories" />
          </a>
          <a href="https://www.linkedin.com/in/vin%C3%ADcius-fraz%C3%A3o-3b6804181/">
            <img src={linkedin} alt="" />
          </a>
          <a href="mailto:frazaovine@gmail.com">
            <img src={email} alt="" />
          </a>
          <a href="https://wa.me/5511941548016">
            <img src={whatsapp} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
