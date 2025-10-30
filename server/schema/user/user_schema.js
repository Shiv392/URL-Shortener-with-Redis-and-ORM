const sequelize = require('../../config/db_config');
const {DataTypes} = require('sequelize');

//syntax ----->
// const model_reference = sequelize.define('model_name', attributes, options);

const user = sequelize.define('user', {
    //user is the name of the model.
    //it is used while opration like sequelize.models.user, associations etc.
    user_id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
        allowNull : false,
        unique : true
    },
    first_name : {
        type : DataTypes.STRING(20), //max 20 length string type. 
        allowNull : false
    },
    last_name : {
        type : DataTypes.STRING(20),
        allowNull : true
    },
    user_email : {
        type : DataTypes.STRING(),
        allowNull : false,
        unique : true,
        validate : {
            isEmail : true
        }
    },
    user_password : {
        type : DataTypes.STRING,
        allowNull : false
    },
    last_login : {
        type : DataTypes.DATE,
        allowNull : true
    }
},{
    tableName : 'user', //will create table with this name 
    timestamps : true, //add createdAt & updatedAt timestamp automatically. 
});

module.exports = user;