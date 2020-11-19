import SERVER from './server';

// The `listen` method launches a web server.
SERVER.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
