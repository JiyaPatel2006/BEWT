import mongoose from "mongoose";

export const connection = async () => {
    try {
        if (mongoose.connection.readyState >= 1)
            return;
        await mongoose.connect(process.env.MONGO_URL!);
        console.log("connected to mongoDb");
    } catch (err) {
        console.log("error connecting to mongoDb", err);
    }
}