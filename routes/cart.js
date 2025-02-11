const express = require('express')
const router = express.Router()
const { addToCart, removeFromCart, getUserCart } = require('../controllers/cartController')
const userAuth = require('../middleware/usersAuth')

router.route('/')
    .get(userAuth, getUserCart)
    .post(userAuth, addToCart)
    .delete(userAuth, removeFromCart)

module.exports = router