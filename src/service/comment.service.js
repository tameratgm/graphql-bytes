import CommentDb from '../db/comment.db';

class CommentService {
    findById(id) {
        return CommentDb.findById(id);
    }

    findAll() {
        return CommentDb.findAll();
    }

    findByPostId(id) {
        return CommentDb.findByPostId(id);
    }
}

export default new CommentService();
