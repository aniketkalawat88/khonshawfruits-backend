const UserModel = require("../models/auth.models");
const bcrypt = require('bcryptjs');
const { generateToken } = require("../utils/jwtHelper");

const registerPost = async (req ,res) => {
    const {name , email , password } = req.body;
    try{
        const UserExist = await UserModel.findOne({email});
        if(UserExist){
            return res.status(400).json({message:"User Already Exist"});
        }
        const newUser = await new UserModel({
            name:name,
            email:email,
            password:password,
        })
        await newUser.save();
        
        res.status(201).json({message:"User Created Succesfully" , value:newUser})
    }catch(err){
        console.log("error ",err);
        return res.status(500).json({ message: 'Server error', error:err });
    }
}

const loginPost = async (req ,res) => {
    const { email , password } = req.body;
    // console.log("req " , req.body)
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }
      const UserExit = await UserModel.findOne({email:email});
    try{
        if(!UserExit){
            return res.status(404).json({message:"User Not Found"});
        }
        
        const isMatch = await bcrypt.compare(password, UserExit.password);
        
        if(!isMatch){
            return res.status(404).send("Password not correct");
        }
        const token = generateToken({
            id:UserExit._id,
            role:UserExit.role,
        })

        res.status(200).json({
            message: 'Login successful',
            token,
            user: { id: UserExit._id, name: UserExit.name, email: UserExit.email, role: UserExit.role },
          });
    }catch(err){
        console.log("Login error" , err)
        return res.status(500).json({message:"Internal Server Error" , error:err})
    }

    
}

module.exports = { registerPost , loginPost }