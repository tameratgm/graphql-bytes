import { createTestClient } from 'apollo-server-testing';

const chai = require('chai');
chai.use(require('chai-uuid'));
const expect = chai.expect;

import SERVER from '../src/server';

// We pass in the production instance of our server and we get a query and mutate function 
// that can be used to run operations against the server instance without spinning up a full
// HTTP server.
// Currently, queries and mutations are the only operation types supported by createTestClient
const { query, mutate } = createTestClient(SERVER);

it('should return empty author list', async () => {
    // Define the graphQL query we would use in production.
    const getAuthorsQuery = `
    query {
        authors {
            id
        }
      }
    `;

    // execute it againt the test server
    const result = await query({ query: getAuthorsQuery });

    // validate
    expect(result.data).to.eql({
        authors: []
    });
})

it('should create an author', async () => {
    // Define the graphQL query we would use in production.
    const createAuthorQuery = `
    mutation {
        createAuthor(input: {
            firstName: "Tamer",
            lastName: "Aly",
            email: "tamer.aly@giantmachines.com"
        }) {
            id
            firstName
            lastName
            email
        }
    }
    `;

    // execute it againt the test server
    const result = await mutate({ mutation: createAuthorQuery });

    // validate
    const { id, firstName, lastName, email } = result.data.createAuthor;    

    expect(id).to.be.a.uuid('v4');
    expect(firstName).to.eql('Tamer');
    expect(lastName).to.eql('Aly');
    expect(email).to.eql('tamer.aly@giantmachines.com');
})