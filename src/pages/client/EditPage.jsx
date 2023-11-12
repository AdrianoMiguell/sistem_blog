import React, { useState } from "react";
import Alerts from "./Alerts";
import Axios from "axios";
import "../../styles/client/workspace.css";

const EditPage = () => {
  return (
    <>
      <button
        className="position-absolute end-0 btn btn-success mx-2 p-1 px-2 ms-auto me-0 d-block"
        style={{ zIndex: "9", bottom: "-10px" }}
      >
        <i className="bi bi-pencil-fill me-2" style={{ fontSize: "10pt" }} />
        Editar
      </button>
    </>
  );
};

export default EditPage;
