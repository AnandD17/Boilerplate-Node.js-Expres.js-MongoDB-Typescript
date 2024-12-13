import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URL: string = process.env.MONGO_URL || "mongodb://localhost:27017/demo";

// Connect Database
export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log("DB Connected Successfully....");
  } catch (err) {
    console.log("DB Connection Failed!");
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
