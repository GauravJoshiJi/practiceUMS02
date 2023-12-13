const express = require("express");
const route = express.Router();
const services = require("../services/render");
const controller = require("../controller/controller");

// @descreption for root file
//Method GET
route.get("/", services.home_route);
// @descreption for add-user file
//Method GET
route.get("/add-user", services.add_user);
// @descreption for Update user file
//Method GET
route.get("/update-user", services.update_user);

//Creating RESTFULL API's
route.post("/api/users", controller.createUser);
route.get("/api/users", controller.readUser);
route.put("/api/users/:id", controller.updateUser);
route.delete("/api/users/:id", controller.delete);

module.exports = route;
