'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Group = new Schema({
    name: { type: String},
    creator: { type: Schema.Types.ObjectId, ref: 'User'},
    festival: {type: Schema.Types.ObjectId, ref: 'Festival'},
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ msg: String, date: Date}],
    isPrivate: { type: Boolean, default: false},
    createdAt: { type: Date, default: Date.now}
});


module.exports = mongoose.model('Group', Group);