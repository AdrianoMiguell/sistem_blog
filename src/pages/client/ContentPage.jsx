import React, { useState, useRef } from "react";
import ContentEditable from "react-contenteditable";
import EditPage from "./EditPage";
import Alerts from "./Alerts";
import Axios from "axios";

const ContentPage = ({ dataContent, dataId }) => {
  const elemContent = useRef("");

  const [msg, setMsg] = useState({ message: "", type: "alert-warning" });

  const [content, setContent] = useState(dataContent);

  function contentChange(newValue) {
    setContent(newValue);
    if (content.trim() != "") {
      setTimeout(() => {
        updateData(newValue);
      }, 2500);
    } else {
      console.log("Valor nulo");
    }
  }

  function updateData(content) {
    if (content == elemContent.current.textContent) {
      Axios.put("http://localhost:3001/editcontent", {
        content: content,
        id: dataId,
      })
        .then(() => {
          // setMsg({ message: "Updated content", type: "alert-success" });
        })
        .catch(() => {
          setMsg({ message: "Error to updated content", type: "alert-danger" });
        });
    }
  }

  if (dataContent == null || dataContent.trim() == "") {
    return "";
  } else {
    return (
      <div>
        <form>
          <ContentEditable
            className="contentEditable contentPageTop"
            innerRef={elemContent}
            html={content}
            onChange={(e) => {
              contentChange(e.target.value);
            }}
          />
        </form>

        <Alerts msg={msg.message} type={msg.type} />
      </div>
    );
  }
};

export default ContentPage;
