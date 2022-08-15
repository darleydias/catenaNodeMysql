const database = require('../models')
class TiposMideaController{
// ###### Listar tipos de midea ####
static async listaTiposMidea(req,res){
        try{
            const todosTipos = await database.tiposMidea.findAll()           
            return res.status(200).json(todosTipos)
        }
        catch(errors){
            res.status(500).json(errors.message)
        }
    }

    static async mostraUmTipoMidea(req,res){
        const {id} = req.params
        try{
            const umTipoMidea = await database.tiposMidea.findOne(
                {
                    where:{
                    id: Number(id)
                    }
                }
            )
            res.status(200).json(umTipoMidea)
        }catch(error){
            res.status(500).json(error.message)
        }
    
    }
    
static async criaTipoMidea(req,res){
    const novoTipoMidea = req.body
        try{
            const umTipoMidea = await database.tiposMidea.create(novoTipoMidea)
            res.status(200).json(umTipoMidea)
        }catch(error){
            res.status(500).json(error.message)
        }
}
static async atualizaTipoMidea(req,res){
    const novosDadosTipoMidea = req.body
    const {id} = req.params
    try{
        await database.tiposMidea.update(novosDadosTipoMidea,{where:{id: Number(id)}})
        const tipoMideaAtualizado = await database.tiposMidea.findOne({where:{id: Number(id)}})
        res.status(200).json(tipoMideaAtualizado)
    }catch(error){
        res.status(500).json(error.message)
    }

}
}
module.exports = TiposMideaController