// export const autherize=(...role)=>{
//     return (req,res,next)=>{
//         if(!role.includes(req.user.role)){
//        return res.status(401).json({message:`access denied: require on of [${role.join(",")}]`})
//         }
//            next()
//     }
 
// }

export  const autherize=(...role)=>{
    return (req,res,next)=>{
        if(!role.includes(req.user.role)){
            res.status(401).json({message:`Acces denied : requires of on [${role.join(',')}]`})
        }
        next()
    }
}
