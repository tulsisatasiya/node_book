const express = require("express");
const { BookValidation } = require("../validations");
const { bookController } = require("../controllers");
const validate = require("../middelewares/validate");
const route = express.Router();

// route.post("/add", validate(userValidation.addUser), userController.addUser);
route.post("/add", validate(BookValidation.addBook),bookController.addBook);
route.get("/get", bookController.getBook);
route.delete("/delete/:id",bookController.Deletebook);



// routes.delete("/delete-book/:bookid",
//     //validate(BookValidation.DeleteBook),
//     BookController.Deletebook
// )

module.exports = route;