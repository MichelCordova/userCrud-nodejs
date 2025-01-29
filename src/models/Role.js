const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const { use } = require('../routes');

const Role = sequelize.define('role', {
    admin: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Role;