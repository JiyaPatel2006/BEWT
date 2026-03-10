const { getAll, getByID } = require("../models/restaurants.model");

async function getAllRestaurants() {
  try {
    const data = await getAll();
    return {
      error: false,
      data: data,
      message: "data fetched!!",
    };
  } catch (error) {
    return {
      error: true,
      message: "Some error occured, " + error.message,
    };
  }
}

async function getRestaurantByID(id) {
  try {
    const data = await getByID(id);
    if (data.length == 0) {
      return {
        error: true,
        message: "No Resturat found with given id",
      };
    } else {
      return {
        error: false,
        data: data,
        message: "data fetched!!",
      };
    }
  } catch (error) {
    return {
      error: true,
      message: "Some error occured, " + error.message,
    };
  }
}

module.exports = { getAllRestaurants, getRestaurantByID };