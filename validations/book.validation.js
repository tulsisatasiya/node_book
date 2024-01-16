const Joi = require("joi");

/** add user */
const addBook = {
  body: Joi.object().keys({
    book_name: Joi.string().required().trim(),
    book_author: Joi.string().required().trim(),
    book_description: Joi.string().required().trim(),
    book_price: Joi.number().required(),
  }),
};

module.exports = {addBook};