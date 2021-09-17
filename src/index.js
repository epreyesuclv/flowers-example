const { request } = require("express")
const express = require("express");
const { register } = require("./controller/auth");


//database connection
require("dotenv").config()
//require("./jwt/config/databaseQuerys").connect();


//port config
const { API_PORT } = process.env
const port = API_PORT


//server
const app = express()


//midalwares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// rutas
app.use(require("./root/index"))
app.post("/register",register)
app.post("/login",)//todo

//runserver
app.listen(port, () => {
    console.log('server is runnig on port ' + port)
})