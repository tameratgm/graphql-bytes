import AuthorDb from '../db/author.db';

class AuthorService {
    findById(id) {
        return AuthorDb.findById(id);
    }

    findAll() {
        return AuthorDb.findAll();
    }
}

export default new AuthorService();
