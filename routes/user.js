const express = require("express");
const router = express.Router();

const dal = require("../DAL/dataAccess");
const pool = require("../db");

router.get("", (req, res) => {
  dal.getUsers(data => {
    res.status(200).json(data);
  });
});


router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  dal.getUser(id, data => {
    res.status(200).json(data);
  });
});


router.post("/", (req, res) => {
  const student = req.body;
  dal.postUser(student);
  res.status(201).send(`User added with ID : ${student.id}`);
});


router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = { ...req.body };
  dal.updateUser(id, student);
  res.status(201).send(`user updated with id : ${id}`);
});


router.delete("/:id", (req, res) => {
  // Query GetUsers
  // ID : not exist
  const id = parseInt(req.params.id);
  dal.deleteUser(id);
  res.status(200).send(`User deleted name with ID : ${id} `);
});


module.exports = router;
