import React from "react";
import { Link } from "react-router-dom";
import "../../styles/client/page.css";

const Page = ({ data }) => {
  return (
    <div class="page">
      <h2 class="page-title">
        <Link to={"/page"} state={{ data: data }}>
          {data.title}
        </Link>
      </h2>
      <span class="headpage-desc"> {data.description} </span>
    </div>
  );
};

export default Page;
