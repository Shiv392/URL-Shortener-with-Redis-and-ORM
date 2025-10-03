const bcrypt = require('bcrypt');

const bcrypt_password = async(password1, password2)=>{
return new Promise((resolve, reject)=>{
    bcrypt.compare(password1, password2, (err, match)=>{
        if(err){
           return reject(err);
        }

        return resolve(match);
    })
})
}

module.exports = bcrypt_password;