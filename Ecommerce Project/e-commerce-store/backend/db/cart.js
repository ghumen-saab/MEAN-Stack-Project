const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
},
ProductsId:Array(String)
})
const Cart = mongoose.model('carts', wishlistSchema);
module.exports = Cart;