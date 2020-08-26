import PostDb from '../db/post.db';

class PostService {
    findById(id) {
        return PostDb.findById(id);
    }

    findAll() {
        return PostDb.findAll();
    }

    findByAuthorId(id) {
        return PostDb.findByAuthorId(id);
    }
}

export default new PostService();
