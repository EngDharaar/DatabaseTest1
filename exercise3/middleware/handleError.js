export const errorHandle=(error,req,res,next)=>{
    const status=error.message || 500
    res.json({
        success:false,
        status,
        message:error.message || 'somethimg went wromg'
    })
  
}