//importar Router de express
const { Router } = require('express');

//importar rutas hijas
const authRouter = require('./auth');
const adminRouter = require('./admin');

//crear instancia de Router
const router = Router();

//definir rutas hijas
router.use('/auth', authRouter);
router.use('/admin', adminRouter);

module.exports = router;
