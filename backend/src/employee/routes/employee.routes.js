import { Router } from "express";
import * as controller from "../controllers/employee.controller.js";
import { validate } from "../../shared/middlewares/validate.middleware.js";
import authMiddleware from "../../shared/middlewares/auth.middleware.js";
import { updateEmployeeSchema } from "../validations/employee.validation.js";

const router = Router();

router.use(authMiddleware);

router.get("/", controller.getEmployees);
router.get("/:id", controller.getEmployee);
router.get("/:id/stats", controller.getEmployeeStats);
router.put("/:id", validate(updateEmployeeSchema), controller.updateEmployee);
router.delete("/:id", controller.deleteEmployee);

export default router;
