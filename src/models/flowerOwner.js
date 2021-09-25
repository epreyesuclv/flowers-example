const { Model, DataTypes } = require("sequelize/types");
const { sequelize } = require("./connection");
const { Flower } = require("./flowers");
const { UserBack } = require("./userBack");


class FlowerOwner extends Model { }
FlowerOwner.init({
    flowerName: {
        type: DataTypes.STRING,
        primaryKey: true,
        references: {
            model: Flower,
            key: "name"
        }
    },
    ownerName: {
        type: DataTypes.STRING,
        primaryKey: true,
        references: {
            model: UserBack,
            key: "email"
        }
    },
    amount: {
        type: DataTypes.NUMBER,
        defaultValue : 10000
    }
}, {
    sequelize,
    modelName: "FlowerOwner"
})

module.exports = {
    FlowerOwner
}