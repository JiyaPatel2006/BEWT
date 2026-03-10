//routes

const express = require("express");
const {
  getAllRestaurants,
  getRestaurantByID,
} = require("../services/restaurant.service");
// const { checkToken } = require("../middlewares/auth.middleware");

const routeRestaurant = express.Router();

routeRestaurant.get("/", async (req, res) => {
  const data = await getAllRestaurants();
  res.send(data);
});

routeRestaurant.get("/:id", async (req, res) => {
  const data = await getRestaurantByID(req.params.id);
  res.send(data);
});

module.exports.routeRestaurant = routeRestaurant;