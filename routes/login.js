const express = require('express')
const router = express.Router()
const { handleUserLogin } = require('../controllers/usersController')


router.post('/', handleUserLogin)

module.exports = router