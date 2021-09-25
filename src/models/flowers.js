<<<<<<< HEAD
const { Model, DataTypes } = require("sequelize");
=======
const { Model, DataTypes } = require("sequelize/types");
>>>>>>> end users querys and flowers querys
const { sequelize } = require("./connection")


class Flower extends Model { }

Flower.init({
    name: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    region: {
        type: DataTypes.STRING
    },
    color: {
        type: DataTypes.TEXT
    }
}, {
    sequelize,
    modelName: 'Flower'
})

module.exports = {
    Flower
}