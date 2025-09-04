import express from 'express'
import { protect } from '../middleware/protect.js'
import { autherize } from '../middleware/autherize.js'



const router=express.Router()
   
router.get('/dashboard',protect,autherize(["user"]),(req,res)=>{
    res.json(`wewelcome to the admin ${req.user.name}`)
    console.log("welcome to the dashboard")
})

export default router
// import express from 'express'
// const router=express.Router()
// router.get('/dashboard',(req,res)=>{
//     res.json({message:`welcome to the admin dashboard`})
// })

// export default router