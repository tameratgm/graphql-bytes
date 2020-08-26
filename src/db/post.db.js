class PostDb {
    constructor() {
        this.posts = [];
    }

    findById(id) {
        return this.posts[id];
    }

    findAll() {
        return this.posts;
    }

    findByAuthorId(id) {
        return null;
    }
}

export default new PostDb();
