// Создаём роут для запросов категорий 
const categoriesRouter = require('express').Router();

// Импортируем вспомогательные функции
const findAllCategories = require('../middlewares/categories');
const sendAllCategories = require('../controllers/categories');
const createCategory = require('../middlewares/categories');
const sendCategoryCreated = require('../controllers/categories');

// Обрабатываем GET-запрос с роутом '/categories'
categoriesRouter.get('/categories', findAllCategories, sendAllCategories);

// routes/categories.js
categoriesRouter.post(
    "/categories", 
    findAllCategories, 
    createCategory, 
    sendCategoryCreated
);

// Экспортируем роут для использования в приложении — app.js
module.exports = categoriesRouter;