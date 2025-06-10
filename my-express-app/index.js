const express = require("express");
const app = express();

const PORT = 3000;
app.use(express.json());

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
// Route params
app.get("/user/:id", (req, res) => {
  res.send("User ID: ${req.params.id}");
});

//Query params
app.get("/search", (req, res) => {
  res.send("Search query: ${req.query.q}");
});

//CRUD create,update,delete
// rest api

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
