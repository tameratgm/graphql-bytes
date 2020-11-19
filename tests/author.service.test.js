import { expect } from 'chai';

import AuthorService from '../src/service/author.service';

test('author should be created', () => {
    const data = {
        firstName: 'foo',
        lastName: 'bar',
        email: 'xyz@gmail.com'
    };

    const author = AuthorService.create(data);

    expect(author).to.not.be.null;
    expect(author.firstName).to.equal('foo');
    expect(author.lastName).to.equal('bar');
    expect(author.email).to.equal('xyz@gmail.com');
});