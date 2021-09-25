const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("./connection")

class UserBack extends Model { }

UserBack.init({
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
    endPoint: {
        type: DataTypes.TEXT
    },
    token: {
        type: DataTypes.TEXT
    }

},{
    sequelize,
    modelName : "UserBack"
}
)
module.exports = {
    UserBack
}
