const bodyParser = require('body-parser')
const tiposEvidencia = require('./tiposEvidenciaRoute')
const tiposProcedimento = require('./tiposProcedimentoRoute')
const tiposMidea = require('./tiposMideaRoute')
const tiposOperacao = require('./tiposOperacaoRoute')

module.exports = app=>{
    app.use(bodyParser.json())   
    app.use(tiposEvidencia)
    app.use(tiposOperacao)
    app.use(tiposProcedimento)
    app.use(tiposMidea)
}