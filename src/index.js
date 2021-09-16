const { request } = require("express")
const express = require("express")
const app = express()


//midalwares
app.use(express.json())
app.use(express.urlencoded({extended : false}))

// rutas
app.use(require("./root/index"))

app.listen(3000)
console.log("server on port 3000")