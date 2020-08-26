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

    insert(newAuthor) {
        this.authors.push(newAuthor);

        return newAuthor;
    }
}

export default new AuthorDb();
