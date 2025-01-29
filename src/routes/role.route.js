const { getAll, create, getOne, remove, update } = require('../controllers/role.controllers');
const express = require('express');

const routerRole = express.Router();

routerName.route('/')
    .get(getAll)
    .post(create);

routerName.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerRole;