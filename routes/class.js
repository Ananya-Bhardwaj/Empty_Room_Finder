import { importExcel } from "../controllers/class.js";
import express from "express";
import multer from "multer";

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("file"), importExcel);

export default router;
