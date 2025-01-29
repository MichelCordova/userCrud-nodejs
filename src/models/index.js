const  User = require('./User')
const Role = require('./Role')
const Task = require('./Task')

Role.hasMany(User)
User.belongsTo(Role)
User.hasMany(Task)
Task.belongsTo(User)