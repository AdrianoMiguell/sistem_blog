import React, { useState } from "react";
import Axios from "axios";
import Alerts from "./Alerts";

const CreateTopics = ({ id }) => {
  const [subtitle, useSubtitle] = useState();
  const [content, useContent] = useState();
  const [msg, useMsg] = useState("");

  const createNewTopics = () => {
    event.preventDefault();
    console.log(content, subtitle);

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
        className="btnW btn-create-blog ms-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        <i className="bi bi-plus-circle-fill"></i>
        tópico
      </button>
      <div className="div-create-topic collapse mt-2" id="collapseExample">
        <form className="form-create card card-body pt-3 border-0">
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
            <textarea
              min="500"
              rows="8"
              className="form-control"
              onChange={(value) => {
                useContent(value.target.value);
              }}
            ></textarea>
          </div>
          <div>
            <button
              className="btnW my-2"
              type="submit"
              style={{ marginRight: "0" }}
              onClick={createNewTopics}
            >
              Criar
            </button>
          </div>
        </form>
      </div>

      <Alerts msg={msg} />
    </>
  );
};

export default CreateTopics;
