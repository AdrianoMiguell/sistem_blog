import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Alerts from "./Alerts";
import checkSessionStorage from "../security/checkSessionStorage";
import CreateTopics from "./CreateTopics";
import Axios from "axios";
import "../../styles/client/page.css";
import "../../styles/client/workspace.css";
import SubtitlePage from "./SubtitlePage";
import ContentPage from "./ContentPage";

const Page = () => {
  const { data } = useLocation().state;
  const [msg, setMsg] = useState();
  const [topics, setTopics] = useState([]);

  const navigate = useNavigate();
  let haveSession = checkSessionStorage();

  if (haveSession === false) {
    return useEffect(() => {
      navigate("/login");
    }, []);
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/selecttopics/" + data.id)
      .then((res) => {
        // console.log(res.data);
        setTopics(res.data);
      })
      .catch((err) => {
        setMsg("Ocorreu um erro na verificação dos tópicos no banco!");
        console.log(err);
      });
  }, []);

  if (topics.length == 0) {
    return (
      <div className="div-topics">
        <div className="text-center">
          <h1 className="page-title"> {data.title} </h1>
          <span className="page-desc d-block"> {data.description} </span>
          <div className="d-inline-block mx-auto mt-2">
            <span className="mt-5 mb-3 d-block">
              Nenhum tópico criado ainda... <br /> Clique no botão abaixo para
              criar os primeiros contéudos da página.{" "}
            </span>
            <CreateTopics id={data.id} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="div-topics">
        <div className="text-center">
          <h1 className="page-title"> {data.title} </h1>
          <span className="page-desc"> {data.description} </span>
        </div>
        <div className="topics">
          {topics.map((m, index) => (
            <div className="topic">
              <SubtitlePage
                dataId={m.id}
                dataSubtit={m.subtitle}
                key={"sub" + index}
              />
              <ContentPage
                dataId={m.id}
                dataContent={m.content}
                key={"cont" + index}
              />
            </div>
          ))}
        </div>

        <CreateTopics id={data.id} />
        {/* <Alerts msg={msg} /> */}
      </div>
    );
  }
};

export default Page;
