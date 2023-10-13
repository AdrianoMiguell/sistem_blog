import React from "react";
import errorImg from "../assets/svg/error_404.svg";

const ErrorPage = () => {
  return (
    <div className="d-flex flex-column algin-items-center">
      <h1 className="fs-3 text-center m-5"> Pagina não encontrada </h1>
      <img src={errorImg} type="" width={"50%"} style={{ margin: "auto" }} />
    </div>
  );
};

export default ErrorPage;
