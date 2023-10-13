import React, { useEffect } from "react";
import checkSessionStorage from "../security/checkSessionStorage";
import getSessionStorage from "../../functions/getSessionStorage";
import { Outlet, Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  let haveSession = checkSessionStorage();

  if (haveSession === true) {
    let dataUser = getSessionStorage();
    if (dataUser.email == "admin@gmail.com") {
      return useEffect(() => {
        navigate("/controlcenter");
      }, []);
    } else {
      return useEffect(() => {
        navigate("/workspace");
      }, []);
    }
  }

  return (
    <div>
      <h1>Home</h1>
      {/* <Link to="/login">Login</Link>
      <Link to="/register">Register</Link> */}
    </div>
  );
};

export default Home;

// const [text, setText] = useState("# Title \n\n This is a text with me");
// const [hidden, setHidden] = useState(true);

// if(user == undefined) {
//   return(
//     <Login />
//   )
// }
// return (
//   <>
//     <h1> Dashboard </h1>
{
  /* <form action="">
        <input type="text" name="name" id="name" placeholder="name" />
        <input type="email" name="email" id="email" placeholder="email" />
        <input type="password" name="password" id="password" placeholder="password" />
      </form> */
}

{
  /* <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
      ></link>

      <h1> Blog Pessoal </h1>

      <div className="text-blog">
        <pre>
          <code className="language-md">{text}</code>
        </pre>
        <i
          class="bi bi-pencil-square"
          onClick={() => {
            setHidden(!hidden);
            console.log(hidden);
          }}
          style={{ cursor: "pointer" }}
        ></i>
      </div>

      <Textearea text={text} setText={setText} hidden={hidden} /> */
}
{
  /* </> */
}
