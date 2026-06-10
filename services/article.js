const Article = require('../models/article');

const createArticle = async (title, author, body) => {
    const article = new Article({
        title: title,
        author: author,
        body: body
    });

    return await article.save();
};

const getArticleById = async (id) => {
    return await Article.findById(id);
};

const getArticles = async () => {
    return await Article.find({});
};

const updateArticle = async (id, title, author, body) => {
    const article = await getArticleById(id);
    if (!article) return null;
    
    if (title) article.title = title;
    if (author) article.author = author;
    if (body) article.body = body;
    
    await article.save();
    return article;
};

const deleteArticle = async (id) => {
    const article = await getArticleById(id);
    if (!article) return null;
    
    await article.deleteOne();
    return article;
};

module.exports = {
    createArticle,
    getArticleById,
    getArticles,
    updateArticle,
    deleteArticle
};