const express = require('express');
const {
    getNewProducts,
    getFeaturedProducts
} = require('../handlers/product-handler');

const router = express.Router();

router.get('/new-products', async (req, res) => {
    try {
        const products = await getNewProducts();
        res.status(200).json(products);
    } catch (error) {
        console.error('New Products Error:', error);
        res.status(500).json({ message: 'Failed to fetch new products' });
    }
});

router.get('/featured-products', async (req, res) => {
    try {
        const products = await getFeaturedProducts();
        res.status(200).json(products);
    } catch (error) {
        console.error('Featured Products Error:', error);
        res.status(500).json({ message: 'Failed to fetch featured products' });
    }
});

module.exports = router;
