class CommentDb {
    constructor() {
        this.comments = [];
    }

    findById(id) {
        return this.comments[id];
    }

    findAll() {
        return this.comments;
    }

    findByPostId(id) {
        return null;
    }
}

export default new CommentDb();
