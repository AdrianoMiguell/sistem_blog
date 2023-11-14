import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logout from "../functions/logout";
import "../App.css";

const HeadingPerfil = ({ name }) => {
  const navigate = useNavigate();

  if (name == undefined) {
    return (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={"/login"} className="nav-link active">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/register"} className="nav-link active">
            Register
          </Link>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={"/perfil"} className="nav-link active">
            {name}
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/contato"} className="nav-link active">
            contato
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/perfil"} className="nav-link active">
            sobre nós
          </Link>
        </li>
        <li className="nav-item">
          <span
            style={{ cursor: "pointer" }}
            className="nav-link active"
            onClick={() => {
              logout();
              location.reload();
            }}
          >
            Sair
          </span>
        </li>
      </ul>
    );
  }
};

export default HeadingPerfil;
