const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "blog",
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.post("/register", (req, res) => {
  const { name } = req.body;
  const { email } = req.body;
  const { password } = req.body;

  let SQL = "INSERT INTO users (name, email, password) VALUES (?,?,?) ";
  db.query(SQL, [name, email, password], (err, result) => {
    if (err) {
      console.error(err);
      res.send(err);
    } else {
      console.log("Banco criado");
    }
  });
});

app.get("/selectUsers", (req, res) => {
  let SQL = "SELECT * FROM users";

  db.query(SQL, (err, result) => {
    if (err) res.send(err);
    else res.send(result);
  });
});

app.get("/checkuser/:email", (req, res) => {
  const email = req.params.email;

  let SQL = "SELECT * FROM users WHERE email = ? ";

  console.log("Aqui comparando users");
  db.query(SQL, [email], (err, result) => {
    if (err) res.send(err);
    else {
      if (result.length > 0) console.log("Mais de um usuário ... ");
      res.send(result);
    }
  });
});

app.get("/checkuserpassword/:email/:password", (req, res) => {
  let email = req.params.email;
  let password = req.params.password;

  let SQL = "SELECT * FROM users where email = ? and password = ?";

  db.query(SQL, [email, password], (err, result) => {
    if (err) res.send(err);
    else res.send(result);
  });
});

app.post("/createnewpage", (req, res) => {
  let SQL = " INSERT INTO page (title, description, user_id) VALUES (?, ?, ?) ";

  const { title } = req.body;
  const { desc } = req.body;
  const { user_id } = req.body;

  db.query(SQL, [title, desc, user_id], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.get("/selectpages/:userid", (req, res) => {
  const { userid } = req.params;

  let SQL = "SELECT * FROM page WHERE user_id = ?";

  db.query(SQL, [userid], (err, result) => {
    if (err) res.send(err);
    else res.send(result);
  });
});

app.get("/selecttopics/:blogid", (req, res) => {
  let SQL = "SELECT * FROM topics WHERE blog_id = ?";

  const { blogid } = req.params;

  db.query(SQL, [blogid], (err, result) => {
    if (err) res.send(err);
    else res.send(result);
  });
});

app.post("/createnewtopic", (req, res) => {
  let SQL =
    " INSERT INTO topics (subtitle, content, img, blog_id) VALUES (?, ?, ?, ?) ";

  const { subtitle } = req.body;
  const { content } = req.body;
  const { img } = req.body;
  const { blog_id } = req.body;

  db.query(SQL, [subtitle, content, img, blog_id], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.put("/editsubtitle", (req, res) => {
  let SQL = "UPDATE topics SET subtitle = ? WHERE id = ?";

  const { id } = req.body;
  const { subtitle } = req.body;

  db.query(SQL, [subtitle, id], (err, rows) => {
    if (err) return res.send(err);
    if (rows) return res.send(rows);
  });
});

app.put("/editcontent", (req, res) => {
  const { id } = req.body;
  const { content } = req.body;

  let SQL = "UPDATE topics SET content = ? WHERE id = ?";

  db.query(SQL, [content, id], (err, rows) => {
    if (err) return res.send(err);
    if (rows) return res.send(rows);
  });
});

app.listen(3001, () => {
  console.log("Servidor Rodando...");
});

