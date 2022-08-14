const express = require('express')
const bodyParser = require('body-parser')
const app  = express()
app.use(bodyParser.json())
const porta=3000
app.get('/test',(req,res)=>{
    res.status(200)
    .send({messagem:'Mesnagem de boas   vindas'})
})
app.listen(porta,()=>{
    console.log(`o servidor está rodando na porta${porta}`)
})


