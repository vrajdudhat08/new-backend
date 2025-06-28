const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [
    {
      id: Number,
      name: String,
      price: String,
      quantity: Number,
      image: String
    }
  ],
  total: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);
