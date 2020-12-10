var express = require('express');
var router = express.Router();
const controller = require('../controller/teamsControllers')
var methodOverride = require('method-override')// para put y delete

/*LISTADO DE TEAMS*/
router.get('/teams',controller.list)
/* CREAR UN TEAMS*/
router.post('/create',controller.create)
/* EDITAR UN TEAMS */
router.put('/edit/:id',controller.edit)
/* ELIMINAR UN TEAMS */
router.delete('/delete/:id', controller.delete)



module.exports = router;
