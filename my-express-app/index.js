const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello world , how are you today");
});

app.use((req, res, next) => {
  console.log("${req.method} ${req.url");
  next();
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.post("/contact", (req, res) => {
  res.send("Contact page");
});

app.get("/user/:id", (req, res) => {
  res.send("User ID: ${req.params.id}");
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
