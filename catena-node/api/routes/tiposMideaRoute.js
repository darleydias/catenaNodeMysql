const {Router} = require('express')
const TiposMideaController = require('../controllers/TiposMideaController')
const router = Router()
router.get('/tiposMidea',TiposMideaController.listaTiposMidea)
router.get('/tiposMidea/:id',TiposMideaController.mostraUmTipoMidea)
router.post('/tiposMidea',TiposMideaController.criaTipoMidea)
router.put('/tiposMidea/:id',TiposMideaController.atualizaTipoMidea)

module.exports = router