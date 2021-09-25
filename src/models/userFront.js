const { Model, DataTypes } = require("sequelize/types");
const { sequelize } = require("./connection")


class UserFront extends Model { }

UserFront.init({
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