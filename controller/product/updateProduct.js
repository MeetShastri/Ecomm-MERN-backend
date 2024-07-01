import  uploadProductPermission  from "../../helpers/permission.js"
import productModel from "../../model/productModel.js"

export const updateProduct = async (req, res) => {
    try {
        // if(!uploadProductPermission(req.userId)){
        //     throw new Error("Permission denied")
        // }

        const {_id, ...resBody} = req.body
        const updateProduct = await productModel.findByIdAndUpdate(_id, resBody, {new: true})

        res.json({
            message: "Product updated successfully",
            error: false,
            success: true,
            data: updateProduct
        })
    } catch (error) {
        res.status(400).json(
            { 
                error: error.message || error,
                error: true,
                success: false
            })
        
    }
}