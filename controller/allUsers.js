import userModel from "../model/userModel.js";

// get all users
export const getAllUsers = async(req, res) => {
    try {
        console.log("user", req);
        const allUsers = await userModel.find()

        return res.status(200).json(
            { 
                message: "All Users",
                success: true,
                data: allUsers,
            })
    }

    catch (error) {
        return res.status(400).json(
            { 
                message: error.message || error, 
                success: false,
                error: true 
            })
    }
}