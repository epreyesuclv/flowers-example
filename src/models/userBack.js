const { Model, DataTypes } = require("sequelize/types");
const { sequelize } = require("./connection")

class UserBack extends Model { }

UserBack.init({
    firstname: {
        type: DataTypes.STRING
    },
    lastname: {
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
