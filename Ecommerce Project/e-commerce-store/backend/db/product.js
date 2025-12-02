const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    shortDescription: String,
    description: String,
    Price: Number,
    discount: Number,
    images: Array(String),
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'catrgories' // 'User' is the name of the model being referenced
    },
})
const Product = mongoose.model('products', productSchema);
module.exports = Product;