const express = require('express')
const router = express.Router()
const upload = require('../middleware/multer');
const { addMenu, getAllMenuList } = require('../controllers/menuController')

router.route('/')
    .get(getAllMenuList)
    .post(upload.single('image'), addMenu)
//     .delete(adminAuth, removeProduct)

// router.route('/:id')
//     .get(getProduct)
//     .patch(adminAuth, upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }, { name: 'image3', maxCount: 1 }, { name: 'image4', maxCount: 1 }]), updateProduct)

module.exports = router;