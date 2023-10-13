import React, { useState } from "react";
import Axios from "axios";
import Alerts from "./Alerts";

const CreateBlog = ({ id }) => {
  const [title, useTitle] = useState();
  const [desc, useDesc] = useState();
  const [msg, useMsg] = useState("");

  const createNewBlog = () => {
    event.preventDefault();

    if (title != null || desc != null) {
      console.log(id, title, desc);
      Axios.post("http://localhost:3001/createnewpage", {
        title: title,
        desc: desc,
        user_id: id,
      })
        .then(() => {
          sessionStorage.setItem("have_page", true);
          setTimeout(() => {
            location.reload();
          }, 400);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      useMsg("Dados para criação do blog não informados!");
    }
  };

  return (
    <>
      <button
        type="button"
        className="btnW btn-create-blog"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i class="bi bi-plus-circle-fill"></i>
        página
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Criar página
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="form-create">
                <div>
                  <label htmlFor="" className="form-label">
                    Titulo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(value) => {
                      useTitle(value.target.value);
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="" className="form-label">
                    Descrição
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(value) => {
                      useDesc(value.target.value);
                    }}
                  />
                </div>
                <div>
                  <button
                    className="btnW"
                    type="submit"
                    style={{ marginRight: "0" }}
                    onClick={createNewBlog}
                  >
                    Criar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Alerts msg={msg} />
    </>
  );
};

export default CreateBlog;
