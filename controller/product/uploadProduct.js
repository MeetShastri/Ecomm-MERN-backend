import  uploadProductPermission  from "../../helpers/permission.js";
import productModel from "../../model/productModel.js"

export const uploadProduct = async (req, res) => {
    try {

        const sessionUserId = req.userId
        // if(!uploadProductPermission(sessionUserId)){
        //     throw new Error("You don't have permission to upload product")
        // }
        const uploadProduct = new productModel(req.body)
        console.log("req.body", req.body);
        const saveProduct = await uploadProduct.save()
        return res.status(201).json(
            { 
                message: "Product Uploaded successfully", 
                success: true,
                data: saveProduct,
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