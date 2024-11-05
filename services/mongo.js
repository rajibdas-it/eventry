import mongoose from "mongoose";

export async function dbConnect() {
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URI)
        console.log("Database Connected");
        return conn

    } catch (error) {
        console.log(error);
    }
}

dbConnect()