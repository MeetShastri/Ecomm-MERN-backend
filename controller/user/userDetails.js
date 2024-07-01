import userModel from "../../model/userModel.js";

export const userDetails = async(req, res)  =>  {
    try {
        console.log("req.user", req.user._id);
        console.log(req.user._id);
        const user = await userModel.findById(req.user._id);
        return res.status(200).json(
            { 
                message: "User details fetched successfully", 
                data: user,
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