const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const mongoUri = " mongodb://localhost:27017/";
