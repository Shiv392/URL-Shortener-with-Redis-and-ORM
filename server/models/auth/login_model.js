const {user_schema} = require('../../schema/index');
const bcrypt_password = require('../../services/password_decryption');

const login_model = async(email, password)=>{
const user = await user_schema.findOne({where : {user_email : email}});
if(!user){
    const error = new Error('Email is not valid');
    error.status_code = 404;
    throw error;
}

console.log('login user----->', user.dataValues);
const {user_password} = user.dataValues;

const match = await bcrypt_password(password, user_password);
if(!match){
const error = new Error('Password incorrect');
error.status_code = 403;
throw error;
}
else{
return user;
}

// const match = await bcrypt_password()
}
module.exports = login_model;