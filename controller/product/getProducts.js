import productModel from "../../model/productModel.js";

export const getProducts = async (req, res) => {
    try {
        const products = await productModel.find().sort({createdAt: -1})
        return res.status(200).json(
            { 
                message: "Products fetched successfully", 
                success: true,
                data: products,
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