'use strict';

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const fs = require('fs');
let cloudinary = require('cloudinary');
const _ = require('lodash');


const app = express();

app.use(function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();

});

cloudinary.config({
    cloud_name: 'electricworld',
    api_key: '153747799577639',
    api_secret: 'C0siKKdysqrHg9IWER2w4hxO5IA'
});

// connect db
mongoose.connect('mongodb://molly:in the city@ds019472.mlab.com:19472/electric_world');

// bootstrap models
fs.readdirSync(`${__dirname}/models`)
  .forEach(file => require(`${__dirname}/models/${file}`));


// logger setup
app.use(logger('dev'));

// session setup
app.use(session({
    secret: 'weather underground',
    cookie: { maxAge: 60000},
    saveUninitialized: false,
    resave: false
}));

// setup body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use(function(req, res, next) {

    res.locals.cloudinary = cloudinary;
    next(null);

});

// link up routes
app.use(require('./routes/index'));

app.listen(8080, '127.0.0.1', err => {

    err ? console.log(err) : console.log('http://127.0.0.1:8080');

    /*

    this was used to import the festival sample data to mongodb

    let festivalData = require('./sampleData/300_Festivals.json').result.extractorData.data[0].group;

    let Festival = mongoose.model('Festival');

    _.each(festivalData, function (festival) {

        let address = festival.location[0].text.split(',');

        if(address.length == 1) {
            address = {city: address[0].trim()};
        } else if(address.length == 2){
            address = {city: address[0].trim(), country: address[1].trim()};
        }else if( address.length == 3){
            address = {city: address[0].trim(), state:address[1].trim(), country: address[2].trim()}
        } else if(address.length === 4){
            address = {street1: address[0], city: address[1].trim(), state:address[2].trim(), country: address[3].trim()}
        } else {
            return;
        }

        let imageUrl = festival.image[0].src;

        let festivalDocument = new Festival({
            name: festival.name[0].text,
            category: 'Music',
            location: address,
            startAt: new Date(festival.startAt[0].text)
        });

        cloudinary.uploader.upload(imageUrl, results => {
            festivalDocument.image = results;

            console.log(festivalDocument);
            festivalDocument.save()
        });

    });

    */

});