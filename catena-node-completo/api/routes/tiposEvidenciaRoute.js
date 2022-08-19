const {Router} = require('express')
const TiposEvidenciaController = require('../controllers/TiposEvidenciaController')
const router = Router()
router.get('/tiposEvidencia',TiposEvidenciaController.listaTiposEvidencia)
router.get('/tiposEvidencia/:id',TiposEvidenciaController.mostraUmTipoEvidencia)
router.post('/tiposEvidencia',TiposEvidenciaController.criaTipoEvidencia)
router.put('/tiposEvidencia/:id',TiposEvidenciaController.atualizaTipoEvidencia)
router.delete('/tiposEvidencia/:id',TiposEvidenciaController.deletaTipoEvidencia)
module.exports = router