const express = require("express")
const mongoose = require('mongoose')
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require("./config/config")

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
const app = express()

const connectWithRetry = ()=>{
    mongoose.connect(mongoURL)
    .then(()=>{console.log("Conexão realizada com sucesso !")})
    .catch((e)=>{
        console.error(e)
        setTimeout(connectWithRetry,5000)
    })
}

connectWithRetry()

app.get("/",(req,res) =>{
    if(process.env.NODE_ENV == "development")
        res.send("<h2>Development</h2>")
    else if(process.env.NODE_ENV == "production")
        res.send("<h2>production</h2>")
})

const port = process.env.port || 3000

app.listen(port,()=> console.log(`ouvindo na porta ${port}`))