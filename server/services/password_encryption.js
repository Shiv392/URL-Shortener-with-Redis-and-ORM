const bcrypt = require('bcrypt');
const encrypt_password = (password)=>{
return new Promise((resolve,reject)=>{
bcrypt.hash(password, Number(process.env.HASH_VALUE),(hash_err, hash_password)=>{

    if(hash_err){
       return reject(hash_err);
    }

    return  resolve(hash_password);
})
})
}


module.exports = encrypt_password;