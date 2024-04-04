//post
//delete all

import express from "express";
import multer from "multer";
import csvParser from "csv-parser";
import csv from "csvtojson";

import Class from "../models/class.js";

export const importExcel = async (req, res) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then((jsonObj) => {
        var army = [];
        for (var i = 0; i < jsonObj.length; i++) {
          var obj = {};
          obj.name = jsonObj[i]["name"];
          obj.day = jsonObj[i]["day"];
          obj.room = jsonObj[i]["room"];
          obj.one = jsonObj[i]["one"];
          obj.two = jsonObj[i]["two"];
          obj.three = jsonObj[i]["three"];
          obj.four = jsonObj[i]["four"];
          obj.five = jsonObj[i]["five"];
          obj.six = jsonObj[i]["six"];
          obj.seven = jsonObj[i]["seven"];
          obj.eight = jsonObj[i]["eight"];
          army.push(obj);
        }
        Class.insertMany(army)
          .then(function () {
            res.status(200).send({
              message: "Successfully Uploaded!",
            });
          })
          .catch(function (error) {
            res.status(500).send({
              message: "failure",
              error,
            });
          });
      });

    // csv()
    // .fromFile(req.file.path)
    // .then((jsonObj)=>{
    // const results = [];
    // req.file
    //   .pipe(csv())
    //   .on("data", (data) => {
    //     // Assuming the column names are 'name', 'day', 'room', '1', '2', '3', '4', '5', '6', '7', '8'
    //     const obj = {
    //       name: data.name,
    //       day: data.day,
    //       room: data.room,
    //       schedule: {
    //         1: data["1"] || "",
    //         2: data["2"] || "",
    //         3: data["3"] || "",
    //         4: data["4"] || "",
    //         5: data["5"] || "",
    //         6: data["6"] || "",
    //         7: data["7"] || "",
    //         8: data["8"] || "",
    //       },
    //     };
    //     results.push(obj);
    //   })
    //   .on("end", async () => {
    //     await Class.insertMany(results);
    //     console.log("Data saved to MongoDB");
    //     res.json({ message: "Data uploaded successfully" });
    //   });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Invalid file format or data" });
  }
};

// const express = require('express');
// const app = express();
// const multer = require('multer');

// // Configure Multer for file uploads
// const upload = multer().single('file'); // 'file' is the field name in the form

// // Handle file upload
// app.post('/api/files', upload, (req, res, next) => {
//   try {
//     const uploadedFile = req.file; // Access the uploaded file
//     // Process the file as needed
//     console.log(uploadedFile);
//     res.status(200).send('File uploaded successfully.');
//   } catch (err) {
//     next(err);
//   }
// });
