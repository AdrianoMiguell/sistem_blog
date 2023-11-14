import React, { useRef } from "react";
import "../../styles/client/alerts.css";

const Alerts = ({ msg, type }) => {
  const divAlert = useRef("");
  if (msg != null && msg.trim() != "") {
    if (divAlert.current.classList.contains("alert-none")) {
      setTimeout(() => {
        divAlert.current.classList.remove("alert-none");
      }, 1000);
    }
    setTimeout(() => {
      divAlert.current.classList.add("alert-none");
    }, 3000);
  }

  return (
    <>
      <div
        className={"alert " + type}
        style={{ border: "none" }}
        ref={divAlert}
      >
        {msg}
      </div>
    </>
  );
};

export default Alerts;
