const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("./connection")


class UserFront extends Model { }

UserFront.init({
    firstName: {
    
        type: DataTypes.STRING
    },
    lastName: {
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