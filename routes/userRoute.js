const express = require('express');
const { logicController } = require('../controllers/userController');

//router object
const router = express.Router();

//routers
//post and login
router.post('/login',loginController)

//post or register
router.post('/register',registerController)


module.exports = router;