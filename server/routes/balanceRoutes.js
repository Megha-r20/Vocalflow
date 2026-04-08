import express from "express"; import { getBalance } from "../controllers/balanceController.js"; const router = express.Router(); router.get("/", getBalance); export default router;
