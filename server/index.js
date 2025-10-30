const dotenv = require('dotenv');
dotenv.config();
const app = require('./config/app.js');

const sequelize = require('./config/db_config.js');
const {user_schema, url_schema} = require('./schema/index.js');

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



