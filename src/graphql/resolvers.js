import AuthorService from '../service/author.service';

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Author: {
        posts(self, args, context) {
            return self.posts || [];
        },
    },
    Query: {
        authors(self, args, context) {
            return AuthorService.findAll();
        },
        author(self, { id }, context) {
            return AuthorService.findById(id);
        },
    },
};

export default resolvers;
