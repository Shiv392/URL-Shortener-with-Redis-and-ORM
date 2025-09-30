const express = require('express');
const app = express();
const port = 8080;
const dotenv = require('dotenv');
dotenv.config();

const sequelize = require('./db/db_connection');
const {user_schema} = require('./schema/index.js');

app.get('/', (req, res) => {
    return res.send(`<h1>This is home route </h1>`);
});

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



