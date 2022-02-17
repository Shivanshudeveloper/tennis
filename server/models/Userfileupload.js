const mongoose = require('mongoose');

const usersuserfileuploadchema = new mongoose.Schema({
    email: {
        type: String,
        required: false
    },
    displayName: {
        type: String,
        required: false
    },
    vat: {
        type: String,
        required: false
    },
    billingaddress: {
        type: String,
        required: false
    },
    access: {
        type: Boolean,
        required: false,
        default: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const userfileupload = mongoose.model('userfileupload', usersuserfileuploadchema)
module.exports = userfileupload