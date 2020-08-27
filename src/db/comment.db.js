class CommentDb {
    constructor() {
        this.comments = [];
    }

    findById(id) {
        return this.comments.find((e) => e.id === id);
    }

    findAll() {
        return this.comments;
    }

    findByPostId(id) {
        return this.comments.filter((e) => e.id === id);
    }

    insert(comment) {
        this.comments.push(comment);

        return comment;
    }
}

export default new CommentDb();
