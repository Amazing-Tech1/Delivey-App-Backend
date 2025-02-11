const User = require('../models/users')
const bcrypt = require('bcrypt')
const validator = require('validator')
const jwt = require('jsonwebtoken')


async function handleNewUser(req, res) {
    const { username, email, password } = req.body;
    if (!username || !email || !password)
        return res.status(400).json({ 'message': 'All input fields required' })

    const validatedEmail = validator.isEmail(email)
    if (!validatedEmail)
        return res.status(400).json({ 'message': 'Pls enter a valid email address' })

    const duplicate = await User.findOne({ email }).exec()
    if (duplicate) return res.sendStatus(409)
    try {
        const hashedPwd = await bcrypt.hash(password, 10)
        const result = await User.create({
            'username': username,
            'email': email,
            'password': hashedPwd
        })
        console.log(result)
        res.status(201).json({ success: true, 'message': `New user ${username} created` })
    } catch (err) {
        res.status(500).json({ 'message': err.message })
    }
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body
    if (!email || !password) return res.status(400).json({ 'message': 'All input fields required' })
    try {
        const foundUser = await User.findOne({ email }).exec()
        if (!foundUser) return res.sendStatus(401)

        const isMatch = await bcrypt.compare(password, foundUser.password)
        if (!isMatch) return res.status(400).json({ "message": "Email or Password not correct" })

        const accessToken = jwt.sign({ id: foundUser._id }, process.env.ACCESS_TOKEN, { expiresIn: '30m' })
        const refreshToken = jwt.sign({ id: foundUser._id }, process.env.REFRESH_TOKEN, { expiresIn: '3d' })

        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            sameSite: 'None',
            secure: true,
            maxAge: 30 * 60 * 1000
        })
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            sameSite: 'None',
            secure: true,
            maxAge: 3 * 24 * 60 * 60 * 1000
        })

        res.status(201).json({ success: true })

    } catch (err) {
        res.status(500).json(err.message)
    }

}

module.exports = { handleNewUser, handleUserLogin }