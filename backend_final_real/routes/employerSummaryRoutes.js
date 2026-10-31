// backend_final_real/routes/employerSummaryRoutes.js
// backend_final_real/routes/employerSummaryRoutes.js
// Route for employer summary data

import express from "express";
import { getEmployerSummary } from "../controllers/employerSummaryController.js";
import { authenticate } from "../middleware/auth.js";

const router = express.Router();
router.get("/summary", authenticate, getEmployerSummary);
export default router;
