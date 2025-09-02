// const users=[
//     {id:1,name:"faarax"},
//     {id:2,name:"ciise"}
// ]
const User=require('../models/users')

exports.getUsers=async(req,res)=>{
    // res.json(users)
    const users=await User.find()
    res.json(users)
}
exports.createUser=async(req,res)=>{
const user=new User(req.body)
const saved=user.save()
res.json(saved)
}
exports.getUser=async(req,res)=>{
 const user=await User.findById(req.params.id)
 if(!user) return res.status(404).send("user not found")
   res.json(user)
}
exports.updateUser=async(req,res)=>{
    const {id}=req.params
    try {
         const updateUser=await User.findByIdAndUpdate(id,req.body,{new:true})
    if(!updateUser) return res.status(404).send("server error")
        res.json(updateUser)
    } catch (error) {
        res.status(500).send("server error")
    }
   
}
exports.deleteUser=async(req,res)=>{
    const {id}=req.params
    try {
          const deleteUser=await User.findByIdAndDelete(id)
          if(!deleteUser){
            return res.status(404).send("user not found")
          }
         res.send(`User with id ${id} deleted`)
    } catch (error) {
        res.status(500).send("server error")
    }

}