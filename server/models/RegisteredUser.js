const mongoose = require('mongoose');

const RegisteredUserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    registrationDate: {
        type: Date,
        required: true
    },
    // These correspond to the user creating the profile
    userId: {
        type: String,
        required: true
    }
})

const registeredUser = mongoose.model('registeredUser', RegisteredUserSchema)
module.exports = registeredUser