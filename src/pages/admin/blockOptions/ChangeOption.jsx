import React from "react";
import SectionTableUser from "../table_user/SectionTableUser";

const ChangeOption = ({ opt }) => {
  console.log("change: " + opt);
  if (opt == "users") {
    return <SectionTableUser />;
  }

  return <span> Admin Space </span>;
};

export default ChangeOption;
