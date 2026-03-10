//routes

const express = require("express");
const {
  getAllUsers,
  getUserByID,
  checkLogin,
} = require("../services/user.service");

const routeUser = express.Router();

routeUser.use(express.json());

routeUser.get("/", async (req, res) => {
  const data = await getAllUsers();
  res.send(data);
});

routeUser.get("/:id", async (req, res) => {
  const data = await getUserByID(req.params.id);
  res.send(data);
});

routeUser.post("/login", async (req, res) => {
  const data = await checkLogin(req.body);
  res.send(data);
});

module.exports.routeUser = routeUser;