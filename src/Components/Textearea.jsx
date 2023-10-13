import React from "react";
// import EditButton from "./EditButton";

const Textearea = ({ text, setText, hidden }) => {
  //   const hidden_editor = true;

  return (
    <div style={{visibility: hidden == true ? "hidden" : "visible" }}>
      {/* <EditButton /> */}

      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={(e) => {
          setText(e.target.value);
        }}
      >
        {text}
      </textarea>
    </div>
  );
};

export default Textearea;
