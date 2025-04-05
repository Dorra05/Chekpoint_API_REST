
var jwt = require('jsonwebtoken');
const {User} = require ('../models/userSchema')

const isAuth = async(req , res , next)=>{
    const token = req.headers["autorisation"];
    if(!token){
        res.send('session not available')
    }else{
        const decoded = await jwt.verify(token , process.env.JWT_SECRET) 
        const user = await User.findById(decoded.id);
        if(user){
            req.user = user;
            next()
        }
    }
}

module.exports = isAuth