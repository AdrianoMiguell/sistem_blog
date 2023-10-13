import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import checkSessionStorage from "../security/checkSessionStorage";

const Perfil = () => {
  const navigate = useNavigate();

  let haveSession = checkSessionStorage();

  if (haveSession === false) {
    return useEffect(() => {
      navigate("/");
    }, []);
  }

  return (
    <div>
      <h1 className=""> Perfil </h1>

      {/* <form> */}
      <button type="submit" className="btn btn-primary">
        <i class="bi bi-trash3-fill" style={{ fontSize: "10pt" }}></i>
      </button>
      {/* </form> */}
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i class="bi bi-pencil-square"></i>
      </button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Editar Usuario
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
