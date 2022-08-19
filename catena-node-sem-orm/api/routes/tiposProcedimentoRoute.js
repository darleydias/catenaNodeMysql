const {Router} = require('express')
const TiposProcedimentoController = require('../controllers/TiposProcedimentoController')
const router = Router()
router.get('/tiposProcedimento',TiposProcedimentoController.listaTiposProcedimento)
router.get('/tiposProcedimento/:id',TiposProcedimentoController.mostraUmTipoProcedimento)
router.post('/tiposProcedimento',TiposProcedimentoController.criaTipoProcedimento)
router.put('/tiposProcedimento/:id',TiposProcedimentoController.atualizaTipoProcedimento)

module.exports = router