const { getProducts, addProduct, updateProduct, deleteProduct } = require('../controllers/productController');

const router = require('express').Router();

router.get('/products', getProducts);
router.post('/products', addProduct);
router.put('/products/:_id', updateProduct);
router.delete('/products/:_id', deleteProduct);

module.exports = router; 