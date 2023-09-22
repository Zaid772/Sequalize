const { DataTypes } = require("sequelize");
const connection = require("../db/connection") 

const Author = connection.define("Author", {
    author: {
        name: DataTypes.STRING,
        unique: true,
        allowNull: false,
    }
});

module.exports = Author;