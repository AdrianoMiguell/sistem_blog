import React, { useState } from "react";
import Axios from "axios";
import Alerts from "./Alerts";

const CreateTopics = ({ id }) => {
  const [subtitle, useSubtitle] = useState();
  const [content, useContent] = useState();
  const [msg, useMsg] = useState("");

  const createNewTopics = () => {
    event.preventDefault();
    console.log(content, subtitle)

    if (subtitle != null || content != null) {
      console.log(id, subtitle, content);
      Axios.post("http://localhost:3001/createnewtopic", {
        subtitle: subtitle,
        content: content,
        img: null,
        blog_id: id,
      })
        .then(() => {
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
        tópico
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
                Criar tópico
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
                    Subtitulo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(value) => {
                      useSubtitle(value.target.value);
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="" className="form-label">
                    Conteúdo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(value) => {
                      useContent(value.target.value);
                    }}
                  />
                </div>
                {/* <div>
                  <label htmlFor="" className="form-label">
                    Imagem
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(value) => {
                      useImg(value.target.value);
                    }}
                  />
                </div> */}
                <div>
                  <button
                    className="btnW"
                    type="submit"
                    style={{ marginRight: "0" }}
                    onClick={createNewTopics}
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

export default CreateTopics;
