import mongoose from "mongoose"

const MONGODB_URL = process.env.DB_URI;

const dbConnect = async () => {

    try {
        mongoose.connect(MONGODB_URL);
    } catch (error) {
        throw error;
    }
}

export default dbConnect;