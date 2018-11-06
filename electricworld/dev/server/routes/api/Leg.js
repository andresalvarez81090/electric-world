'use strict';

let express = require('express');
let mongoose = require('mongoose');
let _ = require('lodash');

const containerFor = {
    get: 'query',
    post: 'body',
    put: 'body'
};

const validateTest = {

    string: function (value, key) {

        if(_.isString(value)) return false;

        return {
            param: key,
            msg: `Invalid ${key} field, please provide a valid string.`
        }

    },

    objectId: function (value, key) {


        if (mongoose.Types.ObjectId.isValid(value)) return false;

        return {
            param: key,
            msg: `Invalid ${key} field, please provide a valid object id.`
        }


    },

    boolean: function (value, key) {


        if (value === 'true' || value === 'false') return false;

        return {
            param: key,
            msg: `Invalid ${key} field, please provide true or false.`
        }

    }

};

const purifier  = {

    boolean: value => value ==='true',

    int: value => parseInt(value),

    float: value => parseInt(value),

    string: (value, max) => {

        return (''+ value);

    },

    trim: value => value.trim()

};

function validate(request, method, fields) {

    return _.reduce(fields, (errors, field) => {

        let test = field.test;
        let error;
        let key = field.key;
        let dataCollection = containerFor[method];
        let value = request[dataCollection][key];

        if(!value && field.optional) return errors;

        if(_.isString(test) && !_.isFunction(test) ){

            error = validateTest[test](value, key);

        } else if(_.isFunction(test)){

            error = test(value)

        }

        if(error) errors.push(error);

        return errors;

    }, []);


}

function sanitize(request, method, fields) {

    _.each(fields, field  => {

        if(field.sanitize){

            let type = field.test;
            let customeSanitize = sanitize.custom;
            let key = field.key;
            let dataCollection = containerFor[method];
            let value = request[dataCollection][key];

            if(!value && field.optional) return;

            if(_.isFunction(customeSanitize)){
                request[dataCollection][key] = customeSanitize(value);
            } else {

                request[dataCollection][key] = purifier[type](value);
            }

        }

    });

}

function buildData(request, method, fields) {

    return _.reduce(fields, (data, field) => {

        let dataCollection = containerFor[method];
        let key = field.key;

        data[key] = request[dataCollection][key]

    }, {});

}

const CRUD = {

    create: function (model, fields, method) {

        return function (req, res) {


            // validate data
            let errors = validate(req, method, fields);
            
            if(errors.length) return res.status(400).json(errors);

            // sanitize data
            sanitize(req, method, fields);


            let newDocument = new model(buildData(req, method, fields));

            let promise = newDocument.save();

            promise.then(saveDocument => res.status(200).json(saveDocument));
            promise.catch(err => res.status(500).json({msg: 'Failed.'}));
            
        };

    },

    read: function (model, fields, method) {

        return function (req, res) {

            // validate data
            let errors = validate(req, method, fields);

            if(errors.length) return res.status(400).json(errors);

            // sanitize data
            sanitize(req, method, fields);


            let objectId = req[containerFor[method]][fields[0].key];


            let promise =  model.findById()
                                .where('_id').equals(objectId)
                                .exec();

            promise.then(object => res.status(200).json(object));

            promise.catch(err => res.status(500).json({msg: 'Failed.'}));

        };

    },
    
    custom: function (model, fields, method, customeAction) {

        return function (req, res) {

            // validate data
            let errors = validate(req, method, fields);

            if (errors.length) return res.status(400).json(errors);

            // sanitize data
            sanitize(req, method, fields);

            customeAction(req, res);
            
        }

    }
    
};

function Leg(options) {

    let router  = express.Router();
    let model = options.model;

    return _.reduce(options.operations, (router, operation) => {

        let method = operation.method;
        let path =  operation.path;
        let action = operation.action;
        let fields = operation.fields;

        if(_.isFunction(action)){

            router[method](path, CRUD.custom(model, fields, method, action));

        }else{

            router[method](path, CRUD[action](model, fields, method));


        }

        return router;

    }, router);

}


module.exports = Leg;