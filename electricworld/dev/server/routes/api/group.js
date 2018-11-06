'use strict';

let Leg = require('./Leg');
let mongoose = require('mongoose');
let Group = mongoose.model('Group');
let Festival = mongoose.model('Festival');


module.exports = Leg({

    model: Group,

    operations: [
        {
            method: 'post',
            path: '/',
            fields: [
                {key: 'name', test: 'string', sanitize: {type: 'trim'}},
                {key: 'festival', test: 'objectId'},
                {key: 'isPrivate', test: 'boolean', sanitize: true, optional: true}
            ],
            action: (req, res) => {
                
                let postData = {
                    name: req.body.name,
                    creator: res.locals.user._id,
                    festival: req.body.festival,
                    isPrivate: req.body.isPrivate ? req.body.isPrivate : false,
                    members: [res.locals.user._id]
                };

                let group = new Group(postData);

                let promise =group.save();
                
                
                promise.then(savedGroup => {

                    res.status(200).json({
                        msg: 'Successfully Created Group',
                        group: savedGroup
                    });

                });


                promise.catch(err => res.status(500).json({msg: 'Error'}));

            }
        },
        {
            method: 'get',
            path: '/',
            fields: [
                {key: 'group', test: 'objectId'}
            ],
            action: 'read'
        },
        {
            method: 'get',
            path: '/festival',
            fields:[
                {key: 'festival', test: 'objectId'}
            ],
            action: (req, res) => {

                let promise = Group.find()
                                   .where('festival').equals(req.query.festival)
                                   .exec();

                promise.then(results => res.status(200).json(results));

                promise.catch(err => res.status(500).json({msg: 'Request Error'}));
            }
        }
    ]

});