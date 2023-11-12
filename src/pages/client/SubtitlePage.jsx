import React, { useState, useRef } from "react";
import ContentEditable from "react-contenteditable";
import EditPage from "./EditPage";

const SubtitlePage = ({dataSubtit}) => {
  const elemSubtitle = useRef("");

const [subtitle, setSubtitle] = useState();

  function subtitleChange() {
    setSubtitle(elemSubtitle.textContent);
    console.log(subtitle);
  }

  if (dataSubtit == null || dataSubtit.trim() == "") {
    return "";
  } else {
    return (
      <h3 >
        <ContentEditable
          className="subtitlePageTop"
          innerRef={elemSubtitle}
          html={dataSubtit}
          onChange={subtitleChange}
        />
        <EditPage />
      </h3>
    );
  }
};

export default SubtitlePage;
