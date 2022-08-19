const database = require('../models')
class TiposEvidenciaController{
// ###### Listar tipos de evidencia ####
static async listaTiposEvidencia(req,res){
        try{
            const todosTipos = await database.tiposEvidencia.findAll()           
            return res.status(200).json(todosTipos)
        }
        catch(errors){
            res.status(500).json(errors.message)
        }
    }

    static async mostraUmTipoEvidencia(req,res){
        const {id} = req.params
        try{
            const umTipoEvidencia = await database.tiposEvidencia.findOne(
                {
                    where:{
                    id: Number(id)
                    }
                }
            )
            res.status(200).json(umTipoEvidencia)
        }catch(error){
            res.status(500).json(error.message)
        }
    
    }
    static async criaTipoEvidencia(req,res){
        const novoTipoEvidencia = req.body
        try{
            const criaTipoEvidencia = await database.tiposEvidencia.create(novoTipoEvidencia)
            res.status(200).json(criaTipoEvidencia)
        }catch(error){
            res.status(500).json(error.message)
        }
    
    }
    static async atualizaTipoEvidencia(req,res){
        const novosDadosTipoEvidencia = req.body
        const {id} = req.params
        try{
            await database.tiposEvidencia.update(novosDadosTipoEvidencia,{where:{id: Number(id)}})
            const tipoEvidenciaAtualizado = await database.tiposEvidencia.findOne({where:{id: Number(id)}})
            res.status(200).json(tipoEvidenciaAtualizado)
        }catch(error){
            res.status(500).json(error.message)
        }
    
    }
    static async deletaTipoEvidencia(req,res){
        const {id} = req.params
        try{
            await database.tiposEvidencia.destroy({where:{id: Number(id)}})
            res.status(200).json({message:`Registro ${id}`})
        }catch(error){
            res.status(500).json(error.message)
        }
    }
}
module.exports = TiposEvidenciaController