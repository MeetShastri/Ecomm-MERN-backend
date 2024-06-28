import userModel from "../model/userModel.js";
import bcrypt from "bcrypt";

export const userSignUp = async(req, res)  =>  {

    const { name, email, password, profilePic } = req.body;

    if (!name || !email || !password || !profilePic) {
        return res.status(422).json(
            { 
                message: "Please add all the fields",
                success: false 
            })
    }

    try {
        const userExist = await userModel.findOne({ email });
        if (userExist) {
            return res.status(422).json(
                { 
                    message: "User already exist",
                    success: false 
                })
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const user = new userModel({ name, email, password: hashPassword, role:"GENERAL", profilePic });
        await user.save();
        return res.status(201).json(
            { 
                message: "User created successfully", 
                data: user,
                success: true
            });
    } catch (error) {
        console.log(error);
    }
}