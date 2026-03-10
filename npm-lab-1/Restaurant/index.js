const express = require("express");
const { routeUser } = require("./routes/user.route");
const { routeRestaurant } = require("./routes/restaurant.route");
// const { checkToken } = require("./middlewares/auth.middleware");
const app = express();

// app.use(checkToken);

app.use("/restaurants", routeRestaurant);
app.use("/users", routeUser);

app.listen(3000, () => {
  console.log("Server started");
});