'use strict';

let router = require('express').Router();
let auth = require('./auth').auth;
let validateToken = require('./auth').validateToken;
let api = require('./api/index');


router.get('/', (req, res) => {
    
    res.json({msg: 'hello world'})
});

router.use('/auth', auth);

router.use('/api', validateToken, api);


module.exports = router;