import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import Alerts from "./Alerts";
import "../../styles/client/register_login.css";
import checkSessionStorage from "../security/checkSessionStorage";

const Login = () => {
  const [values, setValues] = useState();
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState({ message: "", type: "alert-warning" });
  const navigate = useNavigate();

  let haveSession = checkSessionStorage();

  if (haveSession === true) {
    return useEffect(() => {
      navigate("/workspace");
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
      `http://localhost:3001/checkuserpassword/${values.email}/${values.password}`
    )
      .then((response) => {
        if (response.data.length == 0) {
          setMsg({
            message: "Este usuário não existe!",
            type: "alert-danger",
          });
        } else if (response.data.length > 1) {
          console.error("Error no banco, desculpe! Volte mais tarde!");
        } else {
          console.log("Login realizado! ");
          setMsg({
            message: "Login Realizado",
            type: "alert-success",
          });
          console.log(msg);
          const dataUser = response.data[0];
          console.log(dataUser);
          defineSessionStorage(dataUser.name, dataUser.email, dataUser.id);
          if (
            dataUser.email == "admin@gmail.com" &&
            dataUser.password == "admin987"
          ) {
            return navigate(`/controlcenter`);
          } else {
            // location.reload();
            return navigate(`/workspace`);
          }
        }
      })
      .catch((err) => {
        setMsg({
          message: "Algo deu errado no servidor ... Volte mais tarde! 😔",
          type: "alert-danger",
        });
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
          <h2>Login</h2>
        </legend>
        <Alerts msg={msg.message} type={msg.type} />
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
