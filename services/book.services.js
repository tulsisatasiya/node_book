const { BookScheama } = require("../models");

const addBook = (body) => {
  return BookScheama.create(body);
};

const getBookBybookName = (book_name) => {
  //   console.log(firstName);
  return BookScheama.findOne({ book_name });
};

const getbookdata = async (req, res) => {
    return BookScheama.find();
};


const DeleteBookid = (id) => {
  return BookScheama.findByIdAndDelete(id);
};

module.exports = { addBook, getBookBybookName,getbookdata,DeleteBookid };