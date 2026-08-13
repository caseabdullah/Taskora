const user_model=require('../models/user.model');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');

register_user = async(req,res)=>{

    const{username,email,password}=req.body;
    
    if(!username||!email||!password){
        return res.status(400).json({
            message:"All fields are required"
        })
    }

    const isUserExist = await user_model.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if(isUserExist){
        return res.status(409).json({
            message:"User Already Exist"
        })
    }

    const hash_password=await bcrypt.hash(password,10);

    const user=await user_model.create({
        username,
        email,
        password:hash_password
    })

    const token=jwt.sign({
        id:user._id
    },process.env.JWT);

    res.cookie("token", token, {
    httpOnly: true,
    secure:true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.status(201).json({
        message:"Account Created Successfully",
        user
    });

}

login_user = async(req,res)=>{

    const{username_email,password}=req.body;

    if(!username_email||!password){
        return res.status(400).json({
            message:"All fields are required"
        })
    }

    const login=await user_model.findOne({
        $or:[
            {username:username_email},
            {email:username_email}
        ]
    })

    if(!login){
        return res.status(401).json({
            message:"User does not exist"
        }) 
    }

    const isPasswordValid=await bcrypt.compare(password,login.password);

    if(!isPasswordValid){
        return res.status(401).json({
            message:"Wrong Password"
        })
    }

    const token=jwt.sign({
        id:login._id
    },process.env.JWT)

    res.cookie("token", token, {
    httpOnly: true,
    secure:true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.status(202).json({
        message:"User Logged In Successfully",
        login
    });

}

module.exports={register_user,login_user};