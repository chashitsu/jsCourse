const Library = require('./src/exercise-12')
const express = require('express')
var bodyParser = require('body-parser')

const port = 3000;
var app = express();
app.use(bodyParser.json());
const libr = new Library();

app.get("/getBook/", function (req, res) {
    const code = req.query.code;
    if (!code) {
        res.status(400);
        res.send("Code attribute not assigned")
        return;
    }

    libr.getBook(code).then((book) => {
        console.log(book);
        if (book) {
            res.send(book)
        } else {
            res.status(400);
            res.send("Book with the specified code (" + code + ") does not exist.")
        }

    }).catch((err) => {
        res.status(500);
        res.send("error " + err)
    })
})

app.post("/createBook/", function (req, res) {
    console.log(req.body);
    if (!req.body || !req.body.name || !req.body.code || !req.body.author) {
        res.status(400);
        res.send("Attributes name, code and author have to be filled");
        return;
    }

    libr.createBook(req.body).then(() => {
        res.send("Book created.")
    }).catch((err) => {
        if (err.code === "DUPLICATE_CODE") {
            res.status(400);
            res.send("The book already exists in the database");
        } else {
            res.status(500);
            res.send(err);
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})