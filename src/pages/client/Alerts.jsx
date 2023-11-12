import React from "react";

const Alerts = ({ msg, type }) => {

  
    return (
      <>
        <div className={"alert " + type} style={{ border: "none" }}>
          {msg}
        </div>
      </>
    );

};

export default Alerts;
