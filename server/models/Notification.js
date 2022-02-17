const mongoose = require('mongoose');

const usersnotificationchema = new mongoose.Schema({
    useremail: {
        type: String,
        required: false
    },
    message: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const notification = mongoose.model('notification', usersnotificationchema)
module.exports = notification