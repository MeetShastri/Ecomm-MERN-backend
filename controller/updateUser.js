import userModel from "../model/userModel.js";

export const updateUser = async(req, res) => {
    try {
        const {userId, name, email, role } = req.body   

        const user = await userModel.findById(userId)



        // if(!user){
        //     return res.status(400).json(
        //         { 
        //             message: "User not found",
        //             success: false,
        //             error: true 
        //         })
        // }

        const payload = {
            ...(email && {email: email}),
            ...(name && {name: name}),
            ...(role && {role: role}),
        }

      

        const updateUser = await userModel.findByIdAndUpdate(userId, payload, {new: true})
        return res.status(200).json(
            { 
                message: "User updated successfully",
                success: true,
                data: updateUser,
                error: false
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