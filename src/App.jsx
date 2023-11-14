import React, { useState } from "react";
import getSessionStorage from "./functions/getSessionStorage";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";

const App = () => {
  const dataUser = getSessionStorage();
  const name = dataUser.name;
  
  return (
    <div>
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
