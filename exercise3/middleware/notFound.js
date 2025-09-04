export const notFound=(req,res,next)=>{
    const error=new Error(`Route${req.method},${req.originalURL} not found`)
    statusCode=404
    next(error)
}