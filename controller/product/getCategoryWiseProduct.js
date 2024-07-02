import productModel from "../../model/productModel.js"
export const getCategoryWiseProduct = async(req, res) => {
    try {
        const {category} = req?.body || req?.query
        const product = await productModel.find({category}) 
        return res.status(200).json(
            {
                message : "category wise product",
                data : product,
                success : true,
                error : false
            }
        )
    } catch (error) {
        return res.status(400).json(
            { 
                message: error.message || error, 
                success: false,
                error: true 
            })
        
    }
}
