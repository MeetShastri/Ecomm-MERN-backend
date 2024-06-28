import mongoose from 'mongoose';
export const connectDB = async(req, res) => {
    mongoose.connect(process.env.MONGO_URL);
}

export default connectDB