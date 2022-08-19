const database = require('../models')
class TiposProcedimentoController{
// ###### Listar tipos de procedimento ####
static async listaTiposProcedimento(req,res){
    try{
        const todosTipos = await database.tiposProcedimento.findAll()           
        return res.status(200).json(todosTipos)
    }
    catch(errors){
        res.status(500).json(errors.message)
    }
}

static async mostraUmTipoProcedimento(req,res){
    const {id} = req.params
    try{
        const umTipoProcedimento = await database.tiposProcedimento.findOne(
            {
                where:{
                id: Number(id)
                }
            }
        )
        res.status(200).json(umTipoProcedimento)
    }catch(error){
        res.status(500).json(error.message)
    }

}
static async criaTipoProcedimento(req,res){
    const novoTipoProcedimento = req.body
    try{
        const umTipoProcedimento = await database.tiposProcedimento.create(novoTipoProcedimento)
        res.status(200).json(umTipoProcedimento)
    }catch(error){
        res.status(500).json(error.message)
    }

}
static async atualizaTipoProcedimento(req,res){
    const novosDadosTipoProcedimento = req.body
    const {id} = req.params
    try{
        await database.tiposProcedimento.update(novosDadosTipoProcedimento,{where:{id: Number(id)}})
        const tipoProcedimentoAtualizado = await database.tiposProcedimento.findOne({where:{id: Number(id)}})
        res.status(200).json(tipoProcedimentoAtualizado)
    }catch(error){
        res.status(500).json(error.message)
    }

}
static async deletaTipoProcedimento(req,res){
    const {id} = req.params
    try{
        await database.tiposProcedimento.destroy({where:{id: Number(id)}})
        res.status(200).json({message:`Registro ${id}`})
    }catch(error){
        res.status(500).json(error.message)
    }
}
}
module.exports = TiposProcedimentoController