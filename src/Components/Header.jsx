import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeadingPerfil from "./HeadingPerfil";

function Header({ name }) {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
      setOpen(!open);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <Link to={"/"} className="link navbar-brand">
        Blog
      </Link>
      <div className="navbar-collapse-flex d-flex flex-row-reverse gap-3 align-items-center">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={openMenu}
        >
          <i className={open != true ? "bi bi-list" : "bi bi-x-lg"}></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <HeadingPerfil name={name} />
        </div>
      </div>
    </nav>
  );
}

export default Header;
