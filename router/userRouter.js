const router = require('koa-router');
const userRouter = new router();
const UserController = require('../controller/userController');

userRouter.prefix('/api/user');
userRouter.post('/register', UserController.register);
userRouter.post('/login', UserController.login);

module.exports = userRouter;