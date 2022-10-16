const express = require("express");
const engine = require("express-handlebars").engine;
require("dotenv").config();

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

let logged = false;
let articles = [
  {
    title: "Why MVC is so important",
    author: "Xandromus",
    date: "5/8/2020",
    body: "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
  },
  {
    title: "Authentication vs. Authorization",
    author: "Xandromus",
    date: "5/8/2020",
    body: "There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.",
  },
  {
    title: "Object-Relational Mapping",
    author: "Lernantino",
    date: "5/8/2020",
    body: "I have really loved learning about ORMs. It's really simplified the way I create queries in SQL!",
  },
];

app.get("/", (req, res) => {
  res.render("home", { articles, logged });
});
app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.listen(process.env.PORT, () => console.log("I am alive"));
