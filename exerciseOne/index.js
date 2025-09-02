const express =require ('express')

const app=express()




let users=[
    {id:1,name:"faarax",age:12},
    {id:2,name:"ciise",age:4},
    {id:3,name:"jaamac",age:9}
]

app.use(express.json())

// create anew user
app.post("/users",(req,res)=>{
    const newUser={
        id:users.length+1,
        name:req.body.name,
        age:req.body.age
    }
    users.push(newUser)
    res.json(newUser)
})
// read all users
app.get("/users",(req,res)=>{
    res.json(users)
})
// read single user
app.get("/users/:id",(req,res)=>{
    const user=users.find(u=>u.id ==req.params.id)
    if(!user) return res.status(404).send("user not found")
        res.json(user)
})
// edit user
app.put("/users/:id",(req,res)=>{
    const user=users.find(u=>u.id==req.params.id)
    user.name=req.body.name
    if(!user) return res.status(404).send("user not found")
        res.json(user)
    
})
// delete user
app.delete("/users/:id",(req,res)=>{
    users=users.filter(u=>u.id!=req.params.id)
    res.send(`User ${req.params.id} deleted`)

})


app.listen(3000,()=>{
    console.log("server start local host")
})
