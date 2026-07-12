import { Router } from "express";
import { adminRegisterController, adminLoginController } from "../controllers/admin.controller.js";

const router = Router();

router.post("/register", adminRegisterController);
router.post("/login", adminLoginController);

export default router;
