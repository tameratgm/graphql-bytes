import { gql } from 'apollo-server-express';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
    # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

    # This "Author" type defines the queryable fields for every author in our data source.
    # The '!' character means that the field is required to be on the object.
    type Author {
        id: ID!
        firstName: String!
        lastName: String!
        email: String # note that 'email' is optional!
        posts: [Post!]! # this can be read as 'returning a non-null array of non-null Post objects'
    }

    type Post {
        id: ID!
        title: String
        body: String
        author: Author!
        comments: [Comment!]
    }

    type Comment {
        id: ID!
        text: String
        post: Post!
    }

    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each. In this
    # case, the "authors" query returns an array of zero or more Authors (defined above).
    type Query {
        authors: [Author]
        author(id: ID!): Author
    }
`;

export default typeDefs;
