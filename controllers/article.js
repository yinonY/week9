const articleService = require('../services/article');

const createArticle = async (req, res) => {
    try {
        const { title, author, body } = req.body;
        const newArticle = await articleService.createArticle(title, author, body);
        res.json(newArticle);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getArticles = async (req, res) => {
    try {
        const articles = await articleService.getArticles();
        res.json(articles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getArticle = async (req, res) => {
    try {
        const article = await articleService.getArticleById(req.params.id);
        if (article) {
            return res.json(article);
        }
        return res.status(404).json({ errors: ['Article not found'] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateArticle = async (req, res) => {
    try {
        const { title, author, body } = req.body;
        const updated = await articleService.updateArticle(req.params.id, title, author, body);
        if (updated) {
            return res.json(updated);
        }
        return res.status(404).json({ errors: ['Article not found'] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteArticle = async (req, res) => {
    try {
        const deleted = await articleService.deleteArticle(req.params.id);
        if (deleted) {
            return res.json(deleted);
        }
        return res.status(404).json({ errors: ['Article not found'] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createArticle,
    getArticles,
    getArticle,
    updateArticle,
    deleteArticle
};