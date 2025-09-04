import { generateToken } from "../gererateToken.js"
import User from "../models/auth.js"

export const register=async(req,res,next)=>{
    let {name,email,password,role}=req.body
    try {
        email=email.toLowerCase()
        const existUser=await User.findOne({email})
        if(existUser) return res.status(401).json({message:"email use already"})
            const user=await User.create({name,email,password,role})
                 const token=generateToken(user._id)  
                //  res.json(token)
    } catch (error) {
        console.log("error",error)
        next(error)
    }
}

export const login=async (req,res,next)=>{
    let {email,password}=req.body
    try {
        email=email.toLowerCase();
        const user=await User.findOne({email})
        if(!user || !(await user.comparePassword(password))){
            return res.status(404).json({message:"invaled email and password"})
        }
        const token=generateToken(user._id)
           res.status(201).json({token})
        
    } catch (error) {
        console.log("error",error)
        next(error)
    }
}