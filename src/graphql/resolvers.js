import AuthorService from '../service/author.service';
import PostService from '../service/post.service';
import CommentService from '../service/comment.service';

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Author: {
        posts(self, args, context) {
            return self.posts || [];
        },
    },
    Post: {
        comments(self, args, context) {
            return self.comments || [];
        },
    },
    Query: {
        authors(self, args, context) {
            return AuthorService.findAll();
        },
        author(self, { id }, context) {
            return AuthorService.findById(id);
        },

        posts(self, { authorId }, context) {
            return PostService.findByAuthorId(authorId);
        },
        post(self, { id }, context) {
            return PostService.findById(id);
        },

        comments(self, { postId }, context) {
            return CommentService.findByPostId(postId);
        },
        comment(self, { id }, context) {
            return CommentService.findById(id);
        },
    },
    Mutation: {
        createAuthor(self, { input }, context) {
            return AuthorService.create(input);
        },
    },
};

export default resolvers;
