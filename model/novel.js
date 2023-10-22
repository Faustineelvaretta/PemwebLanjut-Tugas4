const mongoose = require('mongoose');

const novelSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
});

const PurchaseNovel = mongoose.model('novel', novelSchema);

module.exports = PurchaseNovel;
