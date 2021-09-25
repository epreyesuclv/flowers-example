<<<<<<< HEAD
const { Model, DataTypes } = require("sequelize");
=======
const { Model, DataTypes } = require("sequelize/types");
>>>>>>> end users querys and flowers querys
const { sequelize } = require("./connection")


class UserFront extends Model { }

UserFront.init({
<<<<<<< HEAD
    firstName: {
    
        type: DataTypes.STRING
    },
    lastName: {
=======
    firstname: {
        type: DataTypes.STRING
    },
    lastname: {
>>>>>>> end users querys and flowers querys
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    pass: {
        type: DataTypes.TEXT
    },
    token: {
        type: DataTypes.TEXT
    }

},{
    sequelize,
    modelName : "UserFront"
}
)
module.exports = {
    UserFront
}