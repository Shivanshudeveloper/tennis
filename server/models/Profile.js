const mongoose = require('mongoose');

const profileDataSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    landlordName: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String,
        required: false
    },
    // These correspond to the user creating the profile
    userId: {
        type: String,
        required: true
    }
})

const profile = mongoose.model('profile', profileDataSchema)
module.exports = profile