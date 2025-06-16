const Task = require("./Task");
const express = require("express");
const router = express.Router();
// const app = express();
//inputing data
router.post("/task", async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});
// get task ..
router.get("/task", async (req, res) => {
  try {
    const task = await Task.find();
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
