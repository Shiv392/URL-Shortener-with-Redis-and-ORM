const dotenv = require('dotenv');
dotenv.config();
const app = require('./config/app.js');

const sequelize = require('./db/db_connection');
const {user_schema} = require('./schema/index.js');

(() => {
    sequelize.sync({ alter: true }).then(() => {
        //sync will check and create the all models if they do not exists. 
        app.listen(Number(process.env.SERVER_PORT), () => {
            console.log(`server started http:localhost:${process.env.SERVER_PORT}`);
        })
    }).catch(err => {
     console.error('❌ Error syncing with DB:', err);
    })
})();



