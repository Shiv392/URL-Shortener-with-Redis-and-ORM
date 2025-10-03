const { user_schema } = require("../../schema");
const encrypt_password = require("../../services/password_encryption");

const signup_model = async(first_name, last_name, email, password)=>{

const user_exists = await user_schema.findOne({where : {user_email : email}});
if(user_exists){
    const error = new Error('User already exists');
    error.status_code = 403;
    throw error;
}

const hash_password = await encrypt_password(password);

const new_user = await user_schema.create({
    first_name : first_name,
    last_name : last_name,
    user_email : email,
    user_password : hash_password
});
return new_user;
}

module.exports = signup_model;