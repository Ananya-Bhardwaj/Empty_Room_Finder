//post
//delete all

import express from "express";

export const importExcel = async (req, res) => {
  try {
    let xlFile = xlsx.readFile(req.file);
    let sheet = xlFile.Sheets[xlFile.SheetNames[0]];
    let PJSON = xlsx.utils.sheet_to_json(sheet);

    await classSchema.InsertMany(PJSON).then((result) => {
      if (result.length > 0)
        res.send({ status: 200, message: "success", Count: result.length });
      else res.send("not found");
    });
  } catch (e) {
    res.status(400).send(e);
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