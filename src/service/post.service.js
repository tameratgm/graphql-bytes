import { v4 as uuidv4 } from 'uuid';

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

    create(author, { title, body, authorId }) {
        const post = {
            id: uuidv4(),
            title: title,
            body: body,
            authorId: authorId,
            comments: [],
        };

        const newPost = PostDb.insert(post);
        newPost.author = author;
        author.posts.push(newPost);

        return newPost;
    }
}

export default new PostService();
