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
}

export default new CommentDb();
