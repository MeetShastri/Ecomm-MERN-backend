import userModel from "../../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const userSignIn = async(req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json(
            { 
                message: "Please add all the fields",
                success: false,
                error: true 
            });
    }
    try {
        const userExist = await userModel.findOne({ email });
        if (!userExist) {
            return res.status(422).json(
                { 
                    message: "User does not exist",
                    success: false,
                    error: true
                });
        }
        const isMatch = await bcrypt.compare(password, userExist.password);
        if (!isMatch) {
            return res.status(422).json(
                { 
                    message: "Invalid credentials",
                    success: false,
                    error: true
                });
        }
        const token = jwt.sign({ _id: userExist._id, email: userExist.email }, process.env.JWT_SECRET, { expiresIn: "7d" });
        return res.cookie("token", token, { httpOnly: true, secure: true }).status(201).json(
            { 
                message: "User signed in successfully",
                success: true,
                error: false,
                data: token
            });
    } catch (error) {
        console.log(error);
    }
}