import jwt from 'jsonwebtoken'
export const authToken = async(req, res, next) => {
    try {
    const cookies =  req.headers?.cookie
    const token = cookies.split('; ').find(row => row.startsWith('token=')).split('=')[1];  
    if(!token) {
        return res.status(401).json({message: "User not authenticated", success: false, error: true})
    } 
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
    } catch (error) {
        res.status(401).json({message: "Unauthorized", success: false, error: true})  
    }
}