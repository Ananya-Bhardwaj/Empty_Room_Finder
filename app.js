import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const PORT = 5500;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

app.listen(PORT, (req, res) => {
  connect(); 
  console.log(`Server is running on port ${PORT}`);
});

import classRoute from './routes/class.js'; 

app.use('/api/class', classRoute); 
