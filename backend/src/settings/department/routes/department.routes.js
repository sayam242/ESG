import { Router } from "express";
import {
  createDepartmentController,
  getAllDepartmentsController,
  getDepartmentByIdController,
  updateDepartmentController,
  deleteDepartmentController,
} from "../controllers/department.controller.js";
import authMiddleware from "../../../shared/middlewares/auth.middleware.js";
import adminMiddleware from "../../../shared/middlewares/admin.middleware.js";

const router = Router();

router.use(authMiddleware);

router.get("/", getAllDepartmentsController);
router.get("/:id", getDepartmentByIdController);

router.post("/", adminMiddleware, createDepartmentController);
router.put("/:id", adminMiddleware, updateDepartmentController);
router.delete("/:id", adminMiddleware, deleteDepartmentController);

export default router;
