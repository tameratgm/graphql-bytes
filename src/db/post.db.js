class PostDb {
    constructor() {
        this.posts = [];
    }

    findById(id) {
        return this.posts.find((p) => p.id === id);
    }

    findAll() {
        return this.posts;
    }

    findByAuthorId(id) {
        return this.posts.filter((p) => p.author.id === id);
    }

    insert(post) {
        this.posts.push(post);

        return post;
    }
}

export default new PostDb();
