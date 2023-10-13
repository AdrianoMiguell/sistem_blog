import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import checkSessionStorage from "../security/checkSessionStorage";
import "../../styles/client/register_login.css";

const Register = () => {
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

    Axios.get(
      `http://localhost:3001/checkuser/${values.email}/${values.password}`
    )
      .then((response) => {
        if (response.data.length == 0) {
          setMsg("Você foi registrado!");
          register();
        } else {
          setMsg("Email já está em uso!");
        }
      })
      .catch((err) => {
        setMsg("Algo deu errado no servidor.. Tente novamente!");
        console.error(err);
      });
  };

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      email: values.email,
      password: values.password,
    })
      .then(() => {
        if (
          values.email == "admin@gmail.com" &&
          values.password == "admin987"
        ) {
          return navigate(`/controlcenter`);
        } else {
          return navigate(`/login`);
        }
      })
      .catch((err) => {
        setMsg("Ocorreu um erro! Tente novamente!");
        console.error(err);
      });
  };

  return (
    <div>
      <form action="" className="register_login">
        <legend>
          {" "}
          <h2>Register</h2>{" "}
        </legend>
        <div className="alert alert-danger">{msg}</div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          // value={values.name}
          onChange={handleChangeValue}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          // value={values.email}
          onChange={handleChangeValue}
        />
        <input
          type={show ? "text" : "password"}
          name="password"
          id="password"
          placeholder="password"
          // value={values.password}
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
            <Link to="/login"> Já tem uma conta? Clique aqui </Link>
          </div>
          <button className="btn_form" onClick={handleClickButton}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
