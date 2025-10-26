const express = require('express');
const router = express.Router();
const { getProducts, 
    createProduct ,
    getProductById,
    updateProduct,
    deleteProduct

} = require('../controllers/productController');

// GET /api/products
router.route('/').get(getProducts).post(createProduct);
router.route('/:id')
.get(getProductById)
.put(updateProduct)
.delete(deleteProduct);


module.exports = router;
