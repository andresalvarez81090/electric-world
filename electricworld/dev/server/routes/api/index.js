'use strict';

let api = require('express').Router();

api.get('/', (req, res) => {

    res.json({msg: 'api version 0.1'})

});

api.use('/group', require('./group'));

api.use('/festival', require('./festival'));

api.use('/user', require('./user'));

module.exports = api;