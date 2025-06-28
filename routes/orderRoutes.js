const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// @route POST /api/orders
// @desc Create a new order
router.post('/', async (req, res) => {
  try {
    const { items, total } = req.body;
    const newOrder = new Order({ items, total });
    await newOrder.save();
    res.status(201).json({ message: "Order saved successfully", order: newOrder });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ message: "Failed to save order" });
  }
});

module.exports = router;
