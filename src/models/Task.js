const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Task = sequelize.define('task', {
    task: {
        type: DataTypes.TEXT,
        allowNull: false
    },
});

module.exports = Task;