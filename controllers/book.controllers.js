const { BookService } = require("../services");

const addBook = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const BookExist = await BookService.getBookBybookName(body.book_name);

    if (BookExist) {
      throw new Error("user already exist");
    }

    const Book = await BookService.addBook(body);

    if (!Book) {
      throw new Error("something went wrong");
    }

    res.status(201).json({
      message: "Book Created success",
      data: Book,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
    
  }
};

const getBook = async (req, res) => {
    try {
       
         const getbooks = await BookService.getbookdata(req, res);

         res.status(200).json({
              success: true,
              message: "SuccessFully All Book list Get.....",
              data: {
                    getbooks,

              }
         })
    } catch (error) {
         res.status(400).json({ success: false, message: error.message })
    }
}


const Deletebook = async (req, res) => {
  console.log(req.params.id);

  let id = req.params.id;

  const Book = await BookService.DeleteBookid(id);

  console.log(Book, "delete");

  res.status(200).json({
    message: "book delete success",
    data: Book,
  });
};

module.exports = { addBook,getBook ,Deletebook};