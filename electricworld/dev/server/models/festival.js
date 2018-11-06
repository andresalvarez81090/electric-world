'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Festival = new Schema({
    name: { type: String, required: true},
    description: String,
    category: String,
    location: {
        street1: String,
        street2: String,
        city: String,
        state: String,
        country: String,
        postcode: String,
        geo: { type: [Number], index: '2d'}
    },
    startAt: Date,
    createdAt: { type: Date, default: Date.now},
    image:  Schema.Types.Mixed
});



module.exports = mongoose.model('Festival', Festival);