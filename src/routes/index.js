const express = require('express');
const routerUser = require('./user.route');
const routerRole = require('./role.route');
const routerTask = require('./task.route');
const router = express.Router();

// colocar las rutas aquí
router.use('/user', routerUser);
router.use('/role', routerRole);
router.use('/task', routerTask);


module.exports = router;