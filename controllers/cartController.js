const Product = require('../models/menu')
const User = require('../models/users')




async function getUserCart(req, res) {
    const { userId } = req.body
    if (!userId) {
        return res.status(400).json({ 'Message': 'UserId required' })
    }
    try {
        const userData = await User.findById(userId)
        if (!userData) {
            return res.status(404).json({ 'Message': 'User not found' });
        }
        let cartData = await userData.cartData

        res.status(200).json({ success: true, cartData })
    } catch (err) {
        console.log(err.message)
    }
}

async function addToCart(req, res) {
    const { userId, itemId } = req.body
    if (!userId || !itemId) {
        return res.status(400).json({ 'Message': 'All Credentials required' })
    }
    try {
        const userData = await User.findById(userId)
        let cartData = await userData.cartData

        if (!cartData[itemId]) {
            cartData[itemId] = 1
        } else {
            cartData[itemId] += 1
        }

        await User.findByIdAndUpdate(userId, { cartData })
        res.status(201).json({ success: true })
    } catch (err) {
        console.log(err.message)
        res.json({ 'message': err.message })
    }

}

async function removeFromCart(req, res) {
    const { userId, itemId } = req.body
    if (!userId || !itemId) {
        return res.status(400).json({ 'Message': 'All Credentials required' })
    }
    try {
        const userData = await User.findById(userId)
        if (!userData) {
            return res.status(404).json({ 'Message': 'User not found' });
        }

        let cartData = userData.cartData || {};

        if (cartData[itemId] >= 1) {
            cartData[itemId] -= 1
        }
        if (cartData[itemId] === 0) {
            delete cartData[itemId];
        }

        await User.findByIdAndUpdate(userId, { cartData })
        res.status(201).json({ success: true })

    } catch (err) {
        console.log(err.message)
    }
}
module.exports = { addToCart, removeFromCart, getUserCart }