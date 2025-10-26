const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let books = [
    { id: 1, title: 'Book1', author: 'Author A'},
    { id: 2, title: 'Book2', author: 'Author B'},
    { id: 3, title: 'Book3', author: 'Author c' },
];


app.get('/', (req,res) => {
    res.send('Welcome to the Books API!');

});

app.get('/books/:id', (req,res) => {
    const bookID = parseInt(req.params.id);
    const book = books.find(b => b.id === bookID);

    if (!book) {
        return res.status(404).json({ message: 'Book not found'});
    }

    res.status(200).json(book);

})


app.get('/books', (req,res) => {
    res.status(200).json(books);
});

app.post('/books', (req,res) => {
    const {title , author } = req.body;
    
    if (!title || !author) {
        return res.status(404).json({ message: 'title and author are required'});
    }

    const newBook ={
        id: books.length + 1,
        title: title,
        author: author
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

app.put('/books/:id',(req, res) => {
    const bookID = parseInt(req.params.id);
    const book = books.find(b => b.id === bookID);

    if (!book){
        return res.status(404).json({ message: 'Book Not Found'});
    }

    const {title, author} = req.body;
    if (!title || !author){
        return res.status(400).json({message: 'title and author are required'});
    }

    book.title = title;
    book.author = author;

    res.status(200).json(book);
});

app.delete('/books/:id', (req, res) => {
    const bookID = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === bookID);

    if (bookIndex === -1){
        return res.status(404).json9({message: 'Book not found'});
    }

    books.splice(bookIndex,1);
    res.sendStatus(204);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
