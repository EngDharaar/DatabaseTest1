import jwt from 'jsonwebtoken'
import User from '../models/auth.js'
export const protect=async(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1]
    if(!token) return res.status(401).json({message:"token not provided"})
        try {
            const decode= jwt.verify(token,process.env.jwt_secret)
             req.user=await User.findById(decode.id).select('-password')
             res.json(req.user)
        } catch (error) {
            console.log("error",error)
            next(error)
        }
        next()
        
}


