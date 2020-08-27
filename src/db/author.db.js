class AuthorDb {
    constructor() {
        this.authors = [];
    }

    findById(id) {
        return this.authors.find((e) => e.id === id);
    }

    findAll() {
        return this.authors;
    }

    insert(author) {
        this.authors.push(author);

        return author;
    }
}

export default new AuthorDb();
