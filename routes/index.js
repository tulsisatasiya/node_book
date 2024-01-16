const express = require("express");
const routes = express.Router();
const bookRoutes = require("./book.route");

routes.use("/book", bookRoutes);

module.exports = routes;