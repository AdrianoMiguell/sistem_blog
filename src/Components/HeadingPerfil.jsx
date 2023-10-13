import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logout from "../functions/logout";

const HeadingPerfil = ({ name }) => {
  const navigate = useNavigate();

  if (name == undefined) {
    return (
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
