import PostDb from '../db/post.db';

class PostService {
    findById(id) {
        return PostDb.findById(id);
    }

    findAll() {
        return PostDb.findAll();
    }
}

export default new PostService();
