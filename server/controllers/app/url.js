const url_controller = async(req, res)=>{
    return res.status(200).json({
        success : true,
        message : 'This is url controller'
    })
}

module.exports = url_controller;