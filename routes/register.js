const express = require('express')
const router = express.Router()
const { handleNewUser } = require('../controllers/usersController')


router.post('/', handleNewUser)

module.exports = router