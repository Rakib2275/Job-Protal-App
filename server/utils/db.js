import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB...");
        console.log(process.env.MONGO_URL);

        await mongoose.connect(process.env.MONGO_URL);

        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:");
        console.error(error);
        process.exit(1);
    }
};

export default connectDB;