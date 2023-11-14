import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import checkSessionStorage from "../security/checkSessionStorage";
import "../../styles/client/workspace.css";
import CreateBlog from "./CreatePage";
import HeaderPage from "./HeaderPage";

const Workspace = () => {
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
      if (res.data.length != 0 && !have_page) {
        sessionStorage.setItem("have_page", true);
      } else if (res.data.length == 0) {
        sessionStorage.setItem("have_page", false);
      }
    });
  }, []);


  if (!have_page) {
    return (
      <div>
        <h1 className="text-center"> My Workspace </h1>
        <div className="spaceEmpty">
          <span>
            Nenhum blog criado até o momento... Clique no botão abaixo para
            criar sua primeira página!
          </span>
          <CreateBlog id={id} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="workspace-baner" style={{ margin: "-2rem" }}>
          <h1 className="text-center"> Minhas páginas </h1>
        </div>

        <div className="div-linkPage">
          <div className="d-flex justify-content-end me-4 my-2">
            <CreateBlog id={id} />
          </div>
          <div className="d-flex flex-column align-items-center">
            {data.map((d) => (
              <HeaderPage key={d.id} data={d} />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Workspace;
