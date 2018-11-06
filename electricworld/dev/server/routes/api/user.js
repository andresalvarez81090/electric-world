'use strict';

let Leg = require('./Leg');
let mongoose = require('mongoose');
let User = mongoose.model('User');


module.exports = Leg({

    model: User,

    operations: [
        {
            method: 'get',
            path: '/',
            fields: [],
            action: function (req, res) {



                let promise = User.find()
                                  .where('_id').equals(res.locals.user._id)
                                  .select('name email username description avatar')
                                  .exec()

                promise.then(results => res.status(200).json(results[0]));
                promise.catch(err => res.status(500).json({msg: 'Request Error'}));

            }
        }


    ]

});