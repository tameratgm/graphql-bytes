import { v4 as uuidv4 } from 'uuid';

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

    create(post, { text }) {
        const comment = {
            id: uuidv4(),
            text: text,
            post: post,
        };

        const newComment = CommentDb.insert(comment);
        post.comments.push(newComment);

        return newComment;
    }
}

export default new CommentService();
