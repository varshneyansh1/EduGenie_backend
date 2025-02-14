import express from "express";
import { createTest, getPublicTests, joinTest } from "../controllers/testController.js";
import authMiddleware from "../middlewares/auth.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

// Route to create a test with PDF or YouTube link
router.post("/create", authMiddleware, upload.single("pdf"), createTest);
router.post("/join", authMiddleware, joinTest);
router.get("/public", getPublicTests); // Fetch public tests
export default router;
