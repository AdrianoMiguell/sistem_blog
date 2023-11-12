import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logout from "../functions/logout";
import "../App.css";

const HeadingPerfil = ({ name }) => {
  const navigate = useNavigate();

  if (name == undefined) {
    return (
      <ul className="navbar-nav">
        {/* <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Categorias
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Services
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contato">
            Contato
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#sobre">
            Sobre
          </a>
        </li> */}
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
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </ul>
    );
  }
};

export default HeadingPerfil;
