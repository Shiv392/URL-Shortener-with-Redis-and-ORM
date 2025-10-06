const user_schema = require('./user/user_schema.js');
const url_schema = require('./app/url_schema.js');

user_schema.hasMany(url_schema,{
    foreignKey : 'user_id'
});

url_schema.belongsTo(user_schema,{
    foreignKey : 'user_id'
})

module.exports = {user_schema, url_schema};