const {Router} = require('express')
const TiposOperacaoController = require('../controllers/TiposOperacaoController')
const router = Router()
router.get('/tiposOperacao',TiposOperacaoController.listaTiposOperacao)
router.get('/tiposOperacao/:id',TiposOperacaoController.mostraUmTipoOperacao)
router.post('/tiposOperacao',TiposOperacaoController.criaTipoOperacao)
router.put('/tiposOperacao/:id',TiposOperacaoController.atualizaTipoOperacao)
router.delete('/tiposOperacao/:id',TiposOperacaoController.deletaTipoOperacao)
module.exports = router