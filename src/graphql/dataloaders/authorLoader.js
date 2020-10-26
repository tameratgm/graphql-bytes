import DataLoader from 'dataloader';
import AuthorDb from '../../db/author.db';

const authorLoader = new DataLoader((keys) => {
    const result = keys.map((authorId) => {
        console.log('Loading author', authorId);
        return AuthorDb.findById(authorId);
    });

    return Promise.resolve(result);
});

export default authorLoader;
