var express = require('express');
var router = express.Router();
const controller = require('../controller/storesControllers')


/*LISTADO DE STORES*/
router.get('/',controller.list)

module.exports = router;
