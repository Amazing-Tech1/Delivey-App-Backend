require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./configs/ConnectDB')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path')
const { connectCloudinary } = require('./configs/Cloudinary')


connectDB()
connectCloudinary()

const PORT = process.env.PORT || 5000

connectDB()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true,
}
))

app.use(cookieParser())


app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/root'))
app.use('/api/register', require('./routes/register'))
app.use('/api/login', require('./routes/login'))
app.use('/api/logout', require('./routes/logout'))
app.use('/api/menu', require('./routes/menu'))
app.use('/api/cart', require('./routes/cart'))
app.use('/api/order', require('./routes/order'))

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'public', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ error: "404 not Found" })
    } else {
        res.type('txt').send("404 not Found")
    }

})

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})