import React from "react";
import { Link } from "react-router-dom";
import "../../styles/client/page.css";

const Page = ({ data }) => {
  return (
    <Link to={"/page"} state={{ data: data }}>
      <div className="page">
        <h2 className="page-title">{data.title}</h2>
        <span className="headpage-desc"> {data.description} </span>
      </div>
    </Link>
  );
};

export default Page;
