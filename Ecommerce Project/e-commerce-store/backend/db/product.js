const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    shotDescription: String,
    description: String,
    purchasePrice: Number,
    sellingPrice: Number,
    images: Array(String),
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'catrgories' // 'User' is the name of the model being referenced
    },
})
const Product = mongoose.model('products', productSchema);
module.exports = Product;