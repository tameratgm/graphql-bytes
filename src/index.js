import { ApolloServer } from 'apollo-server';

import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';

import authorLoader from './graphql/dataloaders/authorLoader';
import ChickenCaseDirective from './graphql/directives/chickenCase';

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({
        authorLoader,
    }),
    schemaDirectives: {
        chicken: ChickenCaseDirective,
    },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
