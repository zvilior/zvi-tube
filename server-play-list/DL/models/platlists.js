
const mongoose = require('mongoose');

const playListsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    songs: [
        {
            id: String,
            image: String,
            title: String,
        }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },


})



const playListsModel = mongoose.model('playLists', playListsSchema)
module.exports = { playListsModel }
