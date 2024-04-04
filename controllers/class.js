//post
//delete all

import express from "express";

export const importExcel = async (req, res) => {
  try {
    let xlFile = xlsx.readFile("C:/Users/HP/Desktop/emp.xlsx");
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
