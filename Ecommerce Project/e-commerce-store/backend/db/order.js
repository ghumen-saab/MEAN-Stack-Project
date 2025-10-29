const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    Date: Date,
    orderItems: Array(any),
    status: Number,
})
const Order = mongoose.model('orders', orderSchema);
module.exports = Order;