import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import "../../styles/client/register_login.css";
import checkSessionStorage from "../security/checkSessionStorage";

const Login = () => {
  const [values, setValues] = useState();
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  let haveSession = checkSessionStorage();

  if (haveSession === true) {
    return useEffect(() => {
      navigate("/");
    }, []);
  }

  const handleChangeValue = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    event.preventDefault();
    login();
  };

  const login = () => {
    Axios.get(
      `http://localhost:3001/checkuser/${values.email}/${values.password}`
    )
      .then((response) => {
        if (response.data.length == 0) {
          console.log("Este usuario não existe!");
          setMsg("Este usuario não existe!");
        } else if (response.data.length > 1) {
          console.error("Error no banco, desculpe! Volte mais tarde!");
        } else {
          console.log("Login realizado! ");
          setMsg("Login realizado!");
          const dataUser = response.data[0];
          defineSessionStorage(dataUser.name, dataUser.email, dataUser.id);
          if (
            dataUser.email == "admin@gmail.com" &&
            dataUser.password == "admin987"
          ) {
            return navigate(`/controlcenter`);
          } else {
            location.reload();
          }
        }
      })
      .catch((err) => {
        setMsg("Algo deu errado no servidor.. Tente novamente!");
        console.error(err);
      });
  };

  const defineSessionStorage = (name, email, id) => {
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("id", id);
  };

  return (
    <div>
      <form action="" className="register_login">
        <legend>
          {" "}
          <h2>Login</h2>{" "}
        </legend>
        <div className="alert alert-warning p-0">{msg}</div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          onChange={handleChangeValue}
        />
        <input
          type={show ? "text" : "password"}
          name="password"
          id="password"
          placeholder="password"
          onChange={handleChangeValue}
        />
        <div className="options">
          <div className="show-password">
            <input
              type="checkbox"
              onChange={() => {
                setShow(!show);
                console.log(show);
              }}
              id="show-password"
            />
            <label htmlFor="show-password"> Mostrar Senha </label>
          </div>
          <div className="link-register">
            <Link to="/register"> Não está inscrito? Clique aqui </Link>
          </div>
          <button className="btn_form" onClick={handleClickButton}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
