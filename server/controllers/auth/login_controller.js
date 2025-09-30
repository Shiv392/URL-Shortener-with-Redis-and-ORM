const login_controller = (req,res)=>{
    return res.json({
        success : true,
        message : 'This is login page'
    })
}

module.exports = login_controller;