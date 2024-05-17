import { User } from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req,res) =>{
    const {name,email,password} = req.body;
    let user = await User.findOne({email:req.body.email});
    if(user){
        return res.status(400).send("User already Exists");
    }
    else{

        try {
            const salt = await bcrypt.genSalt(10)
            const hashedpassword = await bcrypt.hash(req.body.password, salt);
            const user = new User({name,email,password:hashedpassword});
            await user.save();
            return res.status(201).json({user,message:"Registered Sucessfully"});
        } catch (error) {
            return res.status(400).json({message:error.message})
        }
    }
}

export const login = async(req , res) =>{
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email:req.body.email});
    if(user && bcrypt.compare(password,user.password)){
        const token =jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'});
       return res.status(201).json({token,message:"Loggedin Successfully"})
    }
    else{
       return res.status(400).json({error:"Invalid Credentials"})
    }
    } catch (error) {
      return  res.status(400).json({error:error.message});
    }
};