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
}

export default new PostDb();
