import { Router } from "express";
import * as controller from "../controllers/environmental.controller.js";
import { validate } from "../../../shared/middlewares/validate.middleware.js";
import authMiddleware from "../../../shared/middlewares/auth.middleware.js";
import { createGoalSchema, updateGoalSchema } from "../validations/environmental.validation.js";

const router = Router();

router.use(authMiddleware);

router.post("/", validate(createGoalSchema), controller.createGoal);
router.get("/", controller.getGoals);
router.get("/dashboard", controller.dashboard);
router.get("/stats", controller.stats);
router.get("/:id", controller.getGoal);
router.put("/:id", validate(updateGoalSchema), controller.updateGoal);
router.delete("/:id", controller.deleteGoal);

export default router;
