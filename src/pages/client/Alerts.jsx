import React from "react";

const Alerts = ({ msg }) => {
  return (
    <>
      <div className="alert alert-danger" style={{ border: "none" }}>
        {msg}
      </div>
    </>
  );
};

export default Alerts;
