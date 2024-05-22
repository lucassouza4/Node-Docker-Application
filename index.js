const express = require("express")

const app = express()

app.get("/",(req,res) =>{
    if(process.env.NODE_ENV == "development")
        res.send("<h2>Development</h2>")
    else if(process.env.NODE_ENV == "production")
        res.send("<h2>production</h2>")
})

const port = process.env.port || 3000

app.listen(port,()=> console.log(`ouvindo na porta ${port}`))