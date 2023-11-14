import React, { useState, useRef } from "react";
import ContentEditable from "react-contenteditable";
import EditPage from "./EditPage";
import Axios from "axios";

const SubtitlePage = ({ dataSubtit, dataId }) => {
  const elemSubtitle = useRef("");

  const [subtitle, setSubtitle] = useState(dataSubtit);

  function subtitleChange(newValue) {
    setSubtitle(newValue);
    setTimeout(() => {
      updateData(newValue);
    }, 2500);
  }

  function updateData(subtitle) {
    if (subtitle == elemSubtitle.current.textContent) {
      Axios.put("http://localhost:3001/editsubtitle/", {
        subtitle: subtitle,
        id: dataId,
      })
        .then(() => {
          console.log("Subtitle updated");
        })
        .catch(() => {
          console.error("Subtitle error");
        });
    }
  }

  if (dataSubtit == null || dataSubtit.trim() == "") {
    return "";
  } else {
    return (
      <h3>
        <form>
          <ContentEditable
            className="contentEditable subtitlePageTop"
            innerRef={elemSubtitle}
            html={subtitle}
            onChange={(e) => {
              subtitleChange(e.target.value);
            }}
          />
        </form>
      </h3>
    );
  }
};

export default SubtitlePage;
