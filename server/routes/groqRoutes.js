import express from "express"; import { processFlow } from "../controllers/groqController.js"; const router = express.Router(); router.post("/process", processFlow); export default router;
