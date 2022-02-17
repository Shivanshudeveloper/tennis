const mongoose = require('mongoose');

const usersfileuploadchema = new mongoose.Schema({
    useremail: {
        type: String,
        required: false
    },
    userfullname: {
        type: String,
        required: false
    },
    userphone: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    cut: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: false
    },
    uploaded_to: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    reception: {
        type: String,
        required: false
    },
    delivery_date: {
        type: String,
        required: false
    },
    publicURL: {
        type: String,
        required: false
    },
    adminview: {
        type: Boolean,
        required: false,
        default: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const fileupload = mongoose.model('fileupload', usersfileuploadchema)
module.exports = fileupload