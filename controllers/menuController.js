const cloudinary = require('cloudinary').v2;
const Product = require('../models/menu')


async function addMenu(req, res) {
    const { name, description, price, category } = req.body

    const image = req.file


    if (!name || !description || !price || !category || !image) return res.status(400).json({ 'Message': 'All credentials are required' })

    try {
        let uploadImg = await cloudinary.uploader.upload(image.path, { resource_type: 'image' });

        const imageUrl = uploadImg.secure_url;

        const result = await Product.create({
            name,
            description,
            price: Number(price),
            category,
            image: imageUrl,
            date: Date.now()
        })

        console.log(result)

        res.status(201).json({ success: true })
    } catch (err) {
        console.log(err)
        res.json({ 'message': err.message })
    }
}

async function getAllMenuList(req, res) {
    const products = await Product.find();
    if (!products) return res.status(204)
    res.status(200).json(products);
}

module.exports = { addMenu, getAllMenuList }