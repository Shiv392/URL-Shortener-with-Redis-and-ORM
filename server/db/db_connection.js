const {Sequelize} = require('sequelize');

//create a new sequealize instance ----->
const sequelize = new Sequelize(
    process.env.DATABASE_NAME, //database name,
    process.env.DATABASE_USER,    //user 
    process.env.DATABASE_PASSWORD, //database password 
    {
        host : process.env.DATABASE_HOST || 'localhost',
        dialect : 'mysql',
        logging : false, //set to true, if we want to see sql query logged.
        pool : {
            max : 5,
            min : 0,
            acquire : 30000,
            idle : 10000
        },
        define :{
            timestamps : true, //automatically add created_at and updated_at column 
            underscored : true //use snake_case styling, if false it will use camelCase. 
        }
    }
);

const test_connection = async()=>{
    try{
        console.log(process.env.DATABASE_NAME)
     await sequelize.authenticate();
     console.log('successfull connection with db -------->')
    }
    catch(err){
     console.log('db connection error----->', err);
    }
}

test_connection();

module.exports = sequelize;