import React, { useState } from "react";
import getSessionStorage from "./functions/getSessionStorage";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";

const App = () => {
  const dataUser = getSessionStorage();
  const name = dataUser.name;
  const [visible, setVisible] = useState(false);
  // const [dnone, setDnone] = useState(true);

  // const removeLoader = () => {
  //   console.log("Tudo pronto!");
  //   // setTimeOut(() => {
  //   //   setDnone(!dnone);
  //   //   const loader = document.querySelector(".loader");
  //   //   document.body.remove(loader);
  //   // }, 5000);
  // };

  return (
    <div>
    
    {/* //     setVisible(!visible);
    //   }}
    // >
    //   <div className="loader"> */}
     {/* <div className="loader" style={{ display: dnone ? "" : "none" }}>
    //   <div className="loader" style={{ opacity: visible ? "0" : "1" }}>
    //     <div className="spinner"></div>
    //   </div> */}

      <header>
        <Header name={name} />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};
// };

export default App;
