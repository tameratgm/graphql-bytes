class AuthorDb {
    constructor() {
        this.authors = [
            {
                id: 0,
                firstName: 'Arthur',
                lastName: 'Jones',
                email: 'arthur.jones@what.com',
            },
            {
                id: 1,
                firstName: 'Foo',
                lastName: 'Bar',
            },
        ];
    }

    findById(id) {
        return this.authors[id];
    }

    findAll() {
        return this.authors;
    }
}

export default new AuthorDb();
