const sequelize = require('../../config/db_config');
const { DataTypes } = require('sequelize');

const url_schema = sequelize.define('url_schema', {
    url_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    short_code: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true
    },
    long_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user', //table name in user model 
            key: 'user_id' //it will make connection with user_id in user table. 
        },
        onDelete: 'CASCADE' //delete url if user is deleted 
    },
},
    {
        tableName: 'url',
        timestamps: true
    }
);

module.exports = url_schema;