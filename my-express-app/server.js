//import
const express = require("express");
const mongoose = require("mongoose");
//express and middleware
const app = express();
app.use(express.json());
//constants
const mongoUri = " mongodb://localhost:27017/taskdb";
const PORT = 3000;
//mongo db connection
mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.error("mongodb connection error:", err));

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
