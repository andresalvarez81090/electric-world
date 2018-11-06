'use strict';

const crypto = require('crypto');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


function hash(password, salt) {

    return crypto.createHash('sha256', salt)
                 .update(password)
                 .digest('hex');
    
}

let User = new Schema({
    name: {
        first: String,
        last: String
    },
    email: { type: String, require: true, unique: true},
    username: { type: String, require: true},
    password: { type: String, require: true},
    token: { type: String, require: true, unique: true},
    description: { type: String},
    avatar:  Schema.Types.Mixed,

});

// methods

User.methods.generateToken = function () {
    
    this.token = hash(this.password + this.salt + new Date(), this.salt);

};

User.methods.validateToken = function (token) {

    return this.token === token;

};

User.methods.generatePassword = function (password) {
    
    this.salt = crypto.randomBytes(32)
                      .toString('hex').slice(0, 64);

    this.password = hash(password, this.salt);
    
};

User.methods.validatePassword = function (password) {

    return this.password === hash(password, this.salt);

};

module.exports = mongoose.model('User', User);