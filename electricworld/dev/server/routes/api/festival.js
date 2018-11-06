'use strict';

let Leg = require('./Leg');
let mongoose = require('mongoose');
let Festival = mongoose.model('Festival');


module.exports = Leg({

    model: Festival,

    operations: [
        
        {
            method: 'get',
            path: '/',
            fields: [
                {key: 'festival', test: 'objectId'}
            ],
            action: 'read'
        },

        {
            method: 'get',
            path: '/search',
            fields: [
                {key: 'q', test: 'string'}
            ],
            action: function (req, res) {

                let q = req.query.q;

                let regexQuery = q.length < 3 ? new RegExp(`^${q}`, 'i') : new RegExp(q, 'i');

                let promise = Festival.find({name: { $regex: regexQuery}}).exec();

                promise.then(results => res.status(200).json(results));

                promise.catch(err => res.status(500).json({msg: 'Request Error'}));

            }
        }
    ]
});