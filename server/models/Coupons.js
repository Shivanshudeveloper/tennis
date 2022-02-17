const mongoose = require('mongoose')

const couponSchema = new mongoose.Schema({
    coupon: {
        type: String,
        required: false,
    },
    discount: {
        type: Number,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const coupons = mongoose.model("coupons", couponSchema);
module.exports = coupons;