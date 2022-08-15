const express = require('express')
const routes = require('./routes/index')
const app  = express()

const porta=3000
routes(app)
app.listen(porta,()=>{
    console.log(`o servidor está rodando na porta${porta}`)
})


