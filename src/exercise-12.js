const fs = require('fs');

class Library {
    async createBook(book) {
        var books = await this.#getAllBooks();

        if (books.find(x => x.code === book.code)) {
            var error = new Error();
            error.code = "DUPLICATE_CODE";
            throw error;
        }

        books.push(book);
        return new Promise(resolve => {
            fs.writeFile("./src/books.json", JSON.stringify(books), (err) => {
                if (err) {
                    console.log(err)
                } else {
                    resolve("Book successfully created");
                }
            });
        })
    }

    async getBook(code) {
        console.log("getting book with code " + code)
        var books = await this.#getAllBooks();
        return books.find(book => book.code === code);
    }

    async #getAllBooks() {
        return new Promise(resolve => {
            fs.readFile("./src/books.json", "utf8", (err, data) => {
                resolve(JSON.parse(data));
            })
        });
    }
}

module.exports = Library;