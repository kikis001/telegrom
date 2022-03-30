const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../network/response');

router.get('', (req, res) => {
    res.send('Hola')
})

router.post('/', (req, res) => {
    controller.addUser(req.body.name)
    .then(data => {
        response.success(req, res, data, 201)
    })
    .catch(err => {
        response.error(req, res, 'Internal error', 500, e)
    })     
})


module.exports = router