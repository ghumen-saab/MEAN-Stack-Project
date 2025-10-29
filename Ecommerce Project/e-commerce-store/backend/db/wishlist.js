const mongoose = require('mongoose');

const wishlistSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    ProductsId: Array(String)
})
const Wishlist = mongoose.model('wishlists', wishlistSchema);
module.exports = Wishlist;