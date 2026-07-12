import { Router } from "express";
import {
  createDepartmentController,
  getAllDepartmentsController,
  getDepartmentByIdController,
  updateDepartmentController,
  deleteDepartmentController,
} from "../controllers/department.controller.js";

const router = Router();

router.post("/", createDepartmentController);
router.get("/", getAllDepartmentsController);
router.get("/:id", getDepartmentByIdController);
router.put("/:id", updateDepartmentController);
router.delete("/:id", deleteDepartmentController);

export default router;
