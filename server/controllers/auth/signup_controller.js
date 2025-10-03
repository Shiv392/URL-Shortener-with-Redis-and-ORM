const signup_model = require('../../models/auth/signup_model');

const signup_controller = async(req,res)=>{
    const {first_name, last_name, email, password} = req.body;

    try{
     const new_user = await signup_model(first_name, last_name, email, password);
     return res.status(201).json({
        message : 'New user has been added'
     })
    }
    catch(err){ 
     const status = err.status_code || 500;
     return res.status(status).json({message : err.message || 'Internal server error'});
    }
}

module.exports = signup_controller;