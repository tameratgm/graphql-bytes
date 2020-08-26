import CommentDb from '../db/comment.db';

class CommentService {
    findById(id) {
        return CommentDb.findById(id);
    }

    findAll() {
        return CommentDb.findAll();
    }
}

export default new CommentService();
