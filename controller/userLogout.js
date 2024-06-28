export const userLogout = async(req, res) => {
    try {
     res.clearCookie('token')
     res.status(200).json(
        { 
            message: "User logged out successfully", 
            success: true,
            error: false 
        })
    } catch (error) {
        return res.status(400).json(
            { 
                message: error.message || error, 
                success: false,
                error: true 
            })   
    }
}