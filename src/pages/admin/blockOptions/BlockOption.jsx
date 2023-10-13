import React from "react";
import "../../../styles/admin/blockOption.css";
// blog\src\styles\admin\blockOption.css

const BlockOption = ({ title, color }) => {
  return (
    <div className="block-option" style={{ backgroundColor: color }}>
      <span className="title-option">{title}</span>
    </div>
  );
};

export default BlockOption;
