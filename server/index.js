// Este documento é uma copia do server original, coloque-o em para rodar em uma pasta diferente da deste projeto

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

app.get("/checkuser/:email/:password", (req, res) => {
  const email = req.params.email;
  const password = req.params.password;

  let SQL = "SELECT * FROM users WHERE email = ? and password = ?";

  console.log("Aqui comparando users");
  db.query(SQL, [email, password], (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/verifyuser/e=:e&p=:p", (req, res) => {
  const e = req.params.p;
  const p = req.params.e;

  res.send(`Aqui estamos : valores : ${e} - ${p}`);
  // res.send(`Aqui estamos : valores : ${req.params.e}`);
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


app.listen(3001, () => {
  console.log("Servidor Rodando...");
});

// console.log("Teste concluido");
