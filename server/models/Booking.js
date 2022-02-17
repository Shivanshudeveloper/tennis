const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    numberOfPeople: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    // These correspond to the user creating the profile
    userId: {
        type: String,
        required: true
    }
})

const booking = mongoose.model('booking', BookingSchema)
module.exports = booking