const mongoose = require("mongoose");

const BookScheama = new mongoose.Schema(
    {
        book_name: {
            type: String,
            trim: true,
        },
        book_author: {
            type: String,
            trim: true,
        },
        book_description: {
            type: String,
            trim: true,
        },
        book_price: {
            type: Number,
            trim: true,
            
        }
    }
    
);

const Book = mongoose.model("BookScheama", BookScheama);

module.exports = Book;