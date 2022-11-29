
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String

    },
    email: {
        type: String,
        unique: true
    },

    favore: {
        type: String,
    },
    craeteDate: {
        type: Date,
        require: false,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    },
    //כתובת - אובייקט שמכיל רחוב, עיר ומספר.
    address: {
        street: { type: String },
        city: { type: String },
        houseNumber: { type: Number }
    },
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    lastLog: {
        type: Date,
        default: Date.now
    },

    // salt: {
    //     type: String,
    //     required: true,
    //     select: false
    // },
    // hashed

    Password: {
        type: String,
        // required: true,
        // select: true
    },


})



const userModel = mongoose.model('user', userSchema)
module.exports = { userModel }

// module.exports.userModel = userModel 