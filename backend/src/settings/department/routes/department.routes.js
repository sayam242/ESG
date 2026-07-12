import { Router } from "express";
import {
  createDepartmentController,
  getAllDepartmentsController,
  getDepartmentByIdController,
  updateDepartmentController,
  deleteDepartmentController,
} from "../controllers/department.controller.js";
import authMiddleware from "../../../shared/middlewares/auth.middleware.js";

const router = Router();

router.use(authMiddleware);

router.post("/", createDepartmentController);
router.get("/", getAllDepartmentsController);
router.get("/:id", getDepartmentByIdController);
router.put("/:id", updateDepartmentController);
router.delete("/:id", deleteDepartmentController);

export default router;
