const express = require('express')
const router = express.Router()
const authController = require('../controller/authController.js')


router.route('/user-register').post(authController.userRegister)

module.exports = router