const { getByUserName } = require("../models/user.model");
const { getAll, getByID } = require("../models/user.model");
var jwt = require("jsonwebtoken");

async function getAllUsers() {
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

async function getUserByID(id) {
  try {
    const data = await getByID(id);
    if (data.length == 0) {
      return {
        error: true,
        message: "No User found with given id",
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

async function checkLogin(formData) {
  try {
    const data = await getByUserName(formData.UserName);
    if (data.length == 0) {
      return {
        error: true,
        message: "No User found with given username",
      };
    } else {
      if (formData.Password == data[0].Password) {
        var token = jwt.sign(
          { id: data[0].UserID, un: data[0].UserName },
          "shhhhh"
        );
        return {
          error: false,
          token,
          message: "Login Successful",
        };
      } else {
        return {
          error: true,
          message: "Password does not match",
        };
      }
    }
  } catch (error) {
    return {
      error: true,
      message: "Some error occured, " + error.message,
    };
  }
}

module.exports = { getAllUsers, getUserByID, checkLogin };