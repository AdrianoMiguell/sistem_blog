import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import checkSessionStorage from "../security/checkSessionStorage";
import "../../styles/client/workspace.css";
import CreateBlog from "./CreateBlog";

const EditBlog = () => {
  const id = sessionStorage.getItem("id");
  const have_page = sessionStorage.getItem("have_page");
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  let haveSession = checkSessionStorage();

  if (haveSession === false) {
    return useEffect(() => {
      navigate("/login");
    }, []);
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/selectpages/" + id).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-center"> My Workspace </h1>
      <div className="spaceEmpty">
        <span>
          Nenhum blog criado até o momento... Clique no botão abaixo para criar
          sua primeira página!
        </span>
        <CreateBlog id={id} />
      </div>
    </div>
  );
};

export default EditBlog;
