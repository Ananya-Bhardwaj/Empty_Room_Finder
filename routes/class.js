import { importExcel } from "../controllers/class.js";
import express from 'express'; 

const router = express.Router();

router.post('/', importExcel); 

export default router; 