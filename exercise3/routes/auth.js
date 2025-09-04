import express from 'express'
import { login, register } from '../controllers/auth.js'
import { protect } from '../middleware/protect.js'


const route=express.Router()

 route.post('/',register)
 route.post('/login',login)

 route.get('/protect',protect,(req,res)=>{
    console.log("req.user",req.user)
 })

export default route