const express = require("express");

const app = express()
const { apiDocumentation } = require('../doc/apidoc.js')
//for documentation with swagger
const swaggerui = require("swagger-ui-express")

app.use("/", swaggerui.serve, swaggerui.setup(apiDocumentation))



require("./models/connection").sequelize.sync()
const { fetchFromAllNodes } = require("./fetchData/requestData");
const { frontRegister, frontLogin, backRegister, backLogin } = require("./jwt/middleware/auth");

// database connection
require("dotenv").config()
//require("./jwt/config/databaseQuerys").connect();
// port config

var port = process.env.PORT || 4000


//server



// midalwares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//rutas
app.use(require("./frontBuisness/APIroot/index"))

app.post("/back_register", backRegister)
app.post("/back_login", backLogin)
app.post("/front_register", frontRegister)
app.post("/front_login", frontLogin)


//runserver
app.listen(port, () => {
    console.log('server is runnig on port ' + port)
    fetchFromAllNodes()
})