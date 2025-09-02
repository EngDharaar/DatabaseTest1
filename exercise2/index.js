const express=require('express')
const userRouter=require('./routes/user')
const mongoose=require('mongoose')
const moragn=require('moragn')
const cors=require('cors')
require('dotenv').config()
const app=express()


app.use(express.json())
app.use('/users',userRouter)
app.use(cors(
    {
        origin:["dugsiiye.com"]

    }
))

app.use(moragn('shortly'))
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("✅ connect mongodb locally "))
.catch(()=>console.log("❌connect error mongodb locally"))
app.listen(4000,()=>{
    console.log("server is start running localhost:4000")
})