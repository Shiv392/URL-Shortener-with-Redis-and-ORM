const app = require('./config/app.js');
const dotenv = require('dotenv');
dotenv.config();
const port = 8080;

const sequelize = require('./db/db_connection');
const {user_schema} = require('./schema/index.js');

(() => {
    sequelize.sync({ alter: true }).then(() => {
        //sync will check and create the all models if they do not exists. 
        app.listen(port, () => {
            console.log(`server started http:localhost:${port}`);
        })
    }).catch(err => {
     console.error('❌ Error syncing with DB:', err);
    })
})();



