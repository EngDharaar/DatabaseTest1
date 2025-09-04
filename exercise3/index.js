import express from 'express'
import { notFound } from './middleware/notFound.js'
import authRoute from './routes/auth.js'
import adminRoute from './routes/admin.js'
import { logger } from './middleware/logger.js'
import { errorHandle } from './middleware/handleError.js'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
dotenv.config()
const app=express()

app.use(morgan('combined'))
app.use(cors(
    {origin:["dugsiiye.com"]}
))



app.use(express.json())
app.use('/auth',authRoute)
app.use('/admin',adminRoute)

app.use(notFound)
app.use(logger)
app.use(errorHandle)

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('✅ connect mongodb locally'))
.catch(()=>console.log("❌ connect error locally"))

app.listen(6000,(req,res)=>{
    console.log("server is start localhost:3000")
})