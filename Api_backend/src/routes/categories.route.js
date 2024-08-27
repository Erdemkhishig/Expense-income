const { Router } = require("express");
const { getAllCategories, createCategory, deleteCategory, getCategoryId } = require('../controllers/categories.controller');

const categoryRouter = Router();

categoryRouter.get('/', getAllCategories);
categoryRouter.post('/', createCategory);
categoryRouter.delete('/:id', deleteCategory);
categoryRouter.get("/:id", getCategoryId)

module.exports = { categoryRouter }; 