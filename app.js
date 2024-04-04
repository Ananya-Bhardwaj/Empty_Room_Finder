import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

PORT = 5500 || process.env.PORT;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
