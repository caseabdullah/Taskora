const jwt=require('jsonwebtoken');
const user_model=require('../models/user.model');

const token_auth = async(req,res,next)=>{

    const token=req.cookies.token;

    if(!token){
        res.status(401).json({
            message:"No token found"
        })
    }

    try{

        const decoded = jwt.verify(token,process.env.JWT);
        const user = await user_model.findById(decoded.id);

        if(!user){
            res.status(401).json({
                message:"User not found"
            })
        }

        req.user={
            id:decoded.id
        }
        next();

    }
    catch(err){
        res.status(401).json({
            err
        })
    }

}
module.exports=token_auth;