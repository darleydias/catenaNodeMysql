const database = require('../models')
class TiposOperacaoController{
// ###### Listar tipos de operacao ####
static async listaTiposOperacao(req,res){
        try{
            const todosTipos = await database.tiposOperacao.findAll()           
            return res.status(200).json(todosTipos)
        }
        catch(errors){
            res.status(500).json(errors.message)
       }
}
static async mostraUmTipoOperacao(req,res){
     const {id} = req.params
        try{
            const umTipoOperacao = await database.tiposOperacao.findOne(
                {
                    where:{
                    id: Number(id)
                    }
                }
            )
            res.status(200).json(umTipoOperacao)
        }catch(error){
            res.status(500).json(error.message)
        }
    
    }
    static async criaTipoOperacao(req,res){
        const novoTipoOperacao = req.body
        try{
            const umTipoOperacao = await database.tiposOperacao.create(novoTipoOperacao)
            res.status(200).json(umTipoOperacao)
        }catch(error){
            res.status(500).json(error.message)
        }
    
    }
    static async atualizaTipoOperacao(req,res){
        const novosDadosTipoOperacao = req.body
        const {id} = req.params
        try{
            await database.tiposOperacao.update(novosDadosTipoOperacao,{where:{id: Number(id)}})
            const tipoOperacaoAtualizado = await database.tiposOperacao.findOne({where:{id: Number(id)}})
            res.status(200).json(tipoOperacaoAtualizado)
        }catch(error){
            res.status(500).json(error.message)
        }
    
    }
}
module.exports = TiposOperacaoController