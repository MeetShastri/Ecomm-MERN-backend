import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
    productName: {
        type: String,
    },
    brandName: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    sellingPrice: {
        type: Number,
    },
    category: {
        type: String,
    },
    productImage: []
},
    { timestamps: true })
export default mongoose.model("Product", productSchema)     