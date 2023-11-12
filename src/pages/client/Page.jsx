import React, { useEffect, useState, useRef } from "react";
import ContentEditable from "react-contenteditable";
import { useLocation, useNavigate } from "react-router-dom";
import Alerts from "./Alerts";
import checkSessionStorage from "../security/checkSessionStorage";
import CreateTopics from "./CreateTopics";
import EditPage from "./EditPage";
import Axios from "axios";
import "../../styles/client/page.css";
import "../../styles/client/workspace.css";
import SubtitlePage from "./SubtitlePage";
import ContentPage from "./ContentPage";

const Page = () => {
  const elemSubtitle = useRef();
  const elemContent = useRef();

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
      <div>
        <div className="text-center">
          <h1 className="page-title"> {data.title} </h1>
          <span className="page-desc"> {data.description} </span>
        </div>
        <span className="mt-5 d-block">Nenhum tópico criado ainda...</span>
        <CreateTopics id={data.id} />
      </div>
    );
  } else {
    return (
      <div>
        <div className="text-center">
          <h1 className="page-title"> {data.title} </h1>
          <span className="page-desc"> {data.description} </span>
        </div>
        <div className="topics">
          {topics.map((m, index) => (
            <div className="topic">
              <SubtitlePage dataSubtit={m.subtitle} key={index} />
              <ContentPage dataContent={m.content} key={index} />

              {/* <h3
                ref={elemSubtitle}
                className="sec-title"
                contentEditable
                onInput={() => {
                  console.log("Clicou");
                  setSubtitle(elemSubtitle.current.textContent);
                  console.log(subtitle);
                }}
              >
                {m.subtitle}
              </h3> */}
              {/* <p className="topics-text" contentEditable>
                {m.content}
                <EditPage />
              </p> */}
            </div>
          ))}
        </div>
        <CreateTopics id={data.id} />

        <Alerts msg={msg} />
      </div>
    );
  }
};

export default Page;
