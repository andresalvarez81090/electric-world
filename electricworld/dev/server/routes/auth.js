'use strict';

let mongoose = require('mongoose');
let auth = require('express').Router();
let User = mongoose.model('User');

auth.post('/signup', (req, res) => {

    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    console.log(req.body)

    if (!email)
        return res.status(400).json({msg: 'Please provide a valid email address.'});
    else if(!password)
        return res.status(400).json({msg: 'Please provide a password.'});
    else if(!username)
        return res.status(400).json({msg: 'Please provide a username'});


    let user = new User({email: email, username: username});

    user.generatePassword(password);

    user.generateToken();

    let promise = user.save();

    promise.then(savedUser => {

        res.status(200).json({
            msg: 'Successfully Created User',
            user: {
                email: savedUser.email,
                username: savedUser.username,
                token: savedUser.token

            }
        });

    });

    promise.catch(err => {

        if (err.code === 11000){

            let field = err.message.split(':')[1].split('$')[1].split('_')[0];

            if(field === 'email')
                res.status(403).json({msg: 'Email address is already taken.'});
            else
                res.status(403).json({msg: 'Try different password.'});

        } else{

            res.status(500).json({msg: 'Server Error'})

        }

    });

});

auth.post('/', (req, res) => {


    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password)
        return res.status(400).json({msg: 'Invalid parameters.'});

    let promise = User.find()
        .where('email').equals(email)
        .exec();

    promise.then(results => {

        if (!results.length)
            return res.status(403).json({msg: 'User does not exist with that email.'});

        let user = results[0];

        if (!user.validatePassword(password))
            return res.status(403).json({msg: 'Invalid password'});

        res.status(200).json({
            msg: 'Success',
            user: {
                email: user.email,
                username: user.username,
                token: user.token

            }
        });

    });

    promise.catch(err => res.status(500).json({msg: 'Server Error'}));

});


exports.auth = auth;

exports.validateToken = function (req, res, next) {

    let token = req.query.token || req.body.token;

    if (!token)
        return res.status(403).json({msg: 'Missing token'});

    let promise = User.find()
                      .where('token').equals(token)
                      .exec();

    promise.then(results => {

        if(results.length !== 1)
            return res.status(403).json({msg: 'Invalid token'});


        let user = results[0];

        if(user.validateToken(token)){

            res.locals.user = user;

            return next();

        }

        res.status(403).json({msg: 'Invalid token'});

    });

    promise.catch(err => res.status(500).json({msg: 'Server Error'}));

};