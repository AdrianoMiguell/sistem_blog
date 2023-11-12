import React, { useState, useRef } from "react";
import ContentEditable from "react-contenteditable";
import EditPage from "./EditPage";

const ContentPage = ({ dataContent }) => {
  const elemContent = useRef();
  const [content, setContent] = useState("");

  function contentChange() {
    setContent(elemContent.textContent);
  }

  if (dataContent == null || dataContent.trim() == "") {
    return "";
  } else {
    return (
      <p>
        <ContentEditable
          className="contentPageTop"
          innerRef={elemContent}
          html={dataContent}
          onChange={contentChange}
        />
        <EditPage />
      </p>
    );
  }
};

export default ContentPage