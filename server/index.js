const express = require('express');
const app = express();
const port = 8080;
const dotenv = require('dotenv');
dotenv.config();

app.get('/',(req,res)=>{
    return res.send(`<h1>This is home route </h1>`);
})

app.listen(port,()=>{
    console.log(`server started http:localhost:${port}`);
})