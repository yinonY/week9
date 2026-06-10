const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Article = new Schema({
    title: {
        type: String,
        required: true
    },
    published: {
        type: Date,
        default: Date.now
    },
    author: String,
    body: String
});

module.exports = mongoose.model('Article', Article);