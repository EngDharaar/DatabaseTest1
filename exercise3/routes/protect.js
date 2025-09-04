import express from 'express'
import { protect } from '../middleware/protect.js'

const route=express.Router()

  route.get('/',protect,(req,res)=>{
    console.log("req.user",req.user)
  })


export default route