const login_model = require("../../models/auth/login_model");
const jwt = require('jsonwebtoken');

const login_controller = async(req,res)=>{
    const {email, password} = req.body;
    try{
    const login_user = await login_model(email, password);
    if(login_user){
        const payload = {
            user_id : login_user.user_id,
            user_email : login_user.user_email
        }
        const jwt_token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn : '24h'});
        login_user.user_token = jwt_token;
        return res.status(200).json({message : 'Login successfull', user : login_user});
    }
    }
    catch(err){
        const status = err.status_code || 500;
        return res.status(status).json({message : err.message || 'Internal server error'});
    }
}

module.exports = login_controller;