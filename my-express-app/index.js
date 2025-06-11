// const express = require("express");
// const app = express();

// const PORT = 3000;
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello world , how are you today");
// });

// app.use((req, res, next, err) => {
//   console.log("${req.method} ${req.url");
//   next();
// });

// app.get("/about", (req, res) => {
//   res.send("About page");
// });

// app.post("/contact", (req, res) => {
//   res.send("Contact page");
// });
// // Route params
// app.get("/user/:id", (req, res) => {
//   res.send("User ID: ${req.params.id}");
// });

// //Query params
// app.get("/search", (req, res) => {
//   res.send("Search query: ${req.query.q}");
// });

// //CRUD create,update,delete
// let users = [{ id: 1, name: "Faith" }];
// //create
// app.post("/users", (req, res) => {
//   const newUser = { id: User.length + 1, name: req.body.name };

//   user.push(newUser);
//   res.status(201).json(newUser);
// });

// //get
// app.get("/users", (req, res) => {
//   res.json(users);
// });
// // getting a single user
// app.get("/users/:id", (req, res) => {
//   const user = users.find((u) => u.id === Number(req.params.id));
//   res.json(users);
// });

// //update
// app.put("/users/:id", (req, res) => {
//   const user = user.find((u) => u.id === Number(req.params.id));
//   user.name = req.body.name;
//   res.json(user);
// });
// // delete
// app.delete("/users/:id", (req, res) => {
//   user = user.filter((u) => u.id != req.params.id);
//   res.status(204).send();
// });

// app.listen(PORT, () => {
//   console.log("Server is running on http://localhost:3000");
// });
