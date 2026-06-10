const categoryService = require('../services/category');

const createCategory = async (req, res) => {
    try {
        const newCategory = await categoryService.createCategory(req.body.name);
        res.json(newCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCategories = async (req, res) => {
    try {
        res.json(await categoryService.getCategories());
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCategory = async (req, res) => {
    try {
        const category = await categoryService.getCategoryById(req.params.id);
        if (category) {
            return res.json(category);
        }
        return res.status(404).json({ errors: ['Category not found'] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateCategory = async (req, res) => {
    try {
        const updated = await categoryService.updateCategory(req.params.id, req.body.name);
        if (updated) {
            return res.json(updated);
        }
        return res.status(404).json({ errors: ['Category not found'] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const deleted = await categoryService.deleteCategory(req.params.id);
        if (deleted) {
            return res.json(deleted);
        }
        return res.status(404).json({ errors: ['Category not found'] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createCategory,
    getCategories,
    getCategory,
    updateCategory,
    deleteCategory
};