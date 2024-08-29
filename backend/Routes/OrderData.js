const express = require("express");
const router = express.Router();
const Order = require('../models/Orders');

router.post('/orderData', async (req, res) => {
    const { email, order_data, order_date } = req.body;

    console.log("UserEmail:", email);
console.log("Order Data:", order_data);


    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }

    let data = order_data;
    data.splice(0, 0, { Order_date: order_date });

    try {
        let existingOrder = await Order.findOne({ email });
        if (!existingOrder) {
            await Order.create({
                email,
                order_data: [data],
            });
            return res.json({ success: true });
        } else {
            await Order.findOneAndUpdate(
                { email },
                { $push: { order_data: data } }
            );
            return res.json({ success: true });
        }
    } catch (error) {
        console.error("Server Error:", error.message);
        return res.status(500).send("Server Error: " + error.message);
    }
});


module.exports = router;
