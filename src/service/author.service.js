import { v4 as uuidv4 } from 'uuid';

import AuthorDb from '../db/author.db';

class AuthorService {
    findById(id) {
        return AuthorDb.findById(id);
    }

    findAll() {
        return AuthorDb.findAll();
    }

    create({ firstName, lastName, email }) {
        const newAuthor = {
            id: uuidv4(),
            firstName: firstName,
            lastName: lastName,
            email: email,
            posts: [],
        };

        return AuthorDb.insert(newAuthor);
    }
}

export default new AuthorService();
