const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    shortDescription: String,
    description: String,
    price: Number,
    discount: Number,
    images: Array(String),
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'catrgories' // Reference to the Category model using ObjectId
    },
    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'brands' // Reference to the Brand model using ObjectId
    },
    isFeatured: Boolean,
    isNew: Boolean,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }

})
const Product = mongoose.model('products', productSchema);
module.exports = Product;