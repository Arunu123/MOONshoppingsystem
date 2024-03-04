const express = require('express');
const router = express.Router();
const { addToCart, removeFromCart,updateQuantity } =requiire('./cart.controller');

router.post('/add-to-cart', addToCart);
router.post('/remove-from-cart', removeFromCart);
router.post('/update-quantity', updateQuantity);

module.exports = router;