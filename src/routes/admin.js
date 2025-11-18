//importar Router de express
const { Router } = require('express');

//importar controladores
const { createTimeBlock, listReservations } = require('../controllers/adminController')

//importar middleware de autenticación
const authenticateToken = require("../middlewares/auth");

//crear instancia de Router
const router = Router();

//definir rutas hijas
router.post('/time-blocks', authenticateToken, createTimeBlock);
router.get('/reservations', authenticateToken, listReservations);

module.exports = router;