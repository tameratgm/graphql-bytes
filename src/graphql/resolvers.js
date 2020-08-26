const authors = [
    {
        id: 0,
        firstName: 'Arthur',
        lastName: 'Jones',
        email: 'arthur.jones@what.com',
    },
    {
        id: 1,
        firstName: 'Foo',
        lastName: 'Bar',
    },
];

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
            return authors;
        },
        author(self, { id }, context) {
            return authors[id];
        },
    },
};

export default resolvers;
