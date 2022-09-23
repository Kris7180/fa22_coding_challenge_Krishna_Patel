const Task = require("../models/task");
const express = require("express");
const router = express.Router();

router.post("/create", async (req, res) => {
  console.log(req.body);
  try {
    const task = await new Task(req.body).save();
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
});

/* CREATE 'PUT' REQUEST */

router.put("/:_id", async (req, res) => {
  console.log(req.body)
  try {
    const update = await Task.updateOne({_id: req.params._id}, {$set: req.body});
    res.send(update);
  } catch (error) {
    res.send(error);
  }
});

/* CREATE 'DELETE' REQUEST */

router.delete("/:_id", async (req, res) => {
  console.log(req.params._id)
  try{
    const result = await Task.deleteOne({_id: req.params._id});
    res.send(result);
  }
  catch(err){
    console.log(err);
  }
});

module.exports = router;
