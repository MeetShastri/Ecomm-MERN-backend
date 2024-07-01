import userModel from "../model/userModel.js"
const uploadProductPermission = async(userId) => {
    const user = await userModel.findById(userId)
    console.log("Permission",user);
    if(user.role !== "ADMIN"){
        return false
    }
    return false
}

export default uploadProductPermission