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

    create(post, { text, postId }) {
        const comment = {
            id: uuidv4(),
            text: text,
            postId: postId,
        };

        const newComment = CommentDb.insert(comment);
        newComment.post = post;
        post.comments.push(newComment);

        return newComment;
    }
}

export default new CommentService();
