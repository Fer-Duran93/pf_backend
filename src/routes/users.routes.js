const express = require('express');
const User = require('../controllers/Users.js');
const validate = require('../middlewares/auth.js');

const usersRoutes = express.Router();
const user = new User();


usersRoutes.get('/register', user.registerRenderGet)
usersRoutes.post('/register', user.registerUser)

usersRoutes.get('/login', user.loginRenderGet)
usersRoutes.get('/main', user.homeRenderGet)
usersRoutes.get('/logout', user.logout)





module.exports =  usersRoutes;