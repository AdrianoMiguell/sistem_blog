import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getSessionStorage from "../../functions/getSessionStorage";
import passwordAdmin from "../security/passwordAdmin";
import "./ControlCenter.css";
import BlockOption from "./blockOptions/BlockOption";
import ChangeOption from "./blockOptions/ChangeOption";

const ControlCenter = () => {
  const navigate = useNavigate();
  const dataUser = getSessionStorage();
  const [value, setValue] = useState();
  const [option, setOption] = useState();

  const email = dataUser.email;
  const password = sessionStorage.getItem("password");

  const checkPassword = () => {
    event.preventDefault();
    if (value == passwordAdmin()) {
      console.log(passwordAdmin());
      sessionStorage.setItem("password", value);
      location.reload();
    }
  };

  if (email != undefined && password == undefined) {
    return (
      <div>
        <h1 className="admin-title"> Admin </h1>
        <form className="admin-form">
          <input
            className="admin-input"
            type="text"
            placeholder="senha"
            onChange={(newValue) => {
              setValue(newValue.target.value);
            }}
          />
          <button className="btnGeral admin-button" onClick={checkPassword}>
            Verificar
          </button>
        </form>
      </div>
    );
  } else if (
    email == undefined ||
    email != "admin@gmail.com" ||
    password != "admin987"
  ) {
    console.log(email, password);
    useEffect(() => {
      console.warn("Area is undefined");
      return navigate("/");
    }, []);
  } else {
    const chosenOption = (chOption) => {
      console.log(chOption);
      setOption(chOption);
    };

    const optionsAdmin = {
      id: [0, 1, 2, 3],
      title: [
        "Lista de Usuários",
        "Editar Home",
        "Gráficos do sistema",
        "Edição de layouts",
      ],
      reference: ["users", "editHome", "chart", "editLayout"],
      color: ["#f85353", "#f8ed53", "#f85377", "#53d2f8"],
    };

    return (
      <div>
        <h1 className="admin-title"> Admin </h1>

        <section className="sectionBlobkOption">
          {optionsAdmin.id.map((i) => (
            <div
              onClick={() => {
                chosenOption(optionsAdmin.reference[i]);
              }}
            >
              <BlockOption
                key={optionsAdmin.id[i]}
                title={optionsAdmin.title[i]}
                color={optionsAdmin.color[i]}
              />
            </div>
          ))}
        </section>

        <section id="sectionOption" className="sectionOpenOption">
          <ChangeOption opt={option} />
        </section>
      </div>
    );
  }
};

export default ControlCenter;
