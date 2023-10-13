import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Alerts from "./Alerts";
import HeaderPage from "./HeaderPage";
import CreateTopics from "./CreateTopics";
import Axios from "axios";
import "../../styles/client/page.css";

const Page = () => {
  const { data } = useLocation().state;
  const [msg, setMsg] = useState();
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/selecttopics/" + data.id)
      .then((res) => {
        console.log(res.data);
        setTopics(res.data);
      })
      .catch((err) => {
        setMsg("Ocorreu um erro na verificação dos tópicos no banco!");
        console.log(err);
      });
  }, []);

  if (topics.length == 0) {
    return (
      <div>
        {" "}
        Nenhum tópico criado ainda...
        <CreateTopics id={data.id} />
      </div>
    );
  } else {
    return (
      <div>
        <div className="workspace-baner text-center">
          <h1 className="page-title"> {data.title} </h1>
          <span className="page-desc"> {data.description} </span>
        </div>

        {topics.map((m) => (
          <div>
            <h3 className="sec-title">{m.subtitle}</h3>
            <p>{m.content}</p>
          </div>
        ))}

        <Alerts msg={msg} />
      </div>
    );
  }
};

export default Page;
