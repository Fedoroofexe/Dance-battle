// Создаём роут для запросов пользователей 
const usersRouter = require('express').Router();

// Импортируем вспомогательные функции
const findAllUsers = require('../middlewares/users');
const sendAllUsers = require('../controllers/users');
const createUser = require('../middlewares/users');
const sendUserCreated = require('../controllers/users');

// Обрабатываем GET-запрос с роутом '/users'
usersRouter.get('/users', findAllUsers, sendAllUsers);

// routes/users.js
usersRouter.post(
  "/users",
  findAllUsers,
  createUser,
  sendUserCreated
);

// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;