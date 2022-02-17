const mongoose = require('mongoose');

// Actual Schema___________________________________________________________________________________________________________
const AgreementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    template: {
        type: String,
        required: true
    },
    landlord: {
        type: Object,
        required: true
    },
    propertyInfo: {
        type: Object,
        required: true
    },
    propertyAddress: {
        type: Object,
        required: true
    },
    leaseDurationInfo: {
        type: Object,
        required: true
    },
    monthlyRent: {
        type: Object,
        required: true
    },
    deposit: {
        type: Object,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
})


const agreement = mongoose.model('agreement', AgreementSchema)
module.exports = agreement