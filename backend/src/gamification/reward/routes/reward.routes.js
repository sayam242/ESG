import { Router } from "express";
import * as controller from "../controllers/reward.controller.js";
import { validate } from "../../../shared/middlewares/validate.middleware.js";
import authMiddleware from "../../../shared/middlewares/auth.middleware.js";
import { createRewardSchema, updateRewardSchema } from "../validations/reward.validation.js";

const router = Router();

router.use(authMiddleware);

router.post("/", validate(createRewardSchema), controller.createReward);
router.get("/", controller.getRewards);
router.get("/:id", controller.getReward);
router.put("/:id", validate(updateRewardSchema), controller.updateReward);
router.delete("/:id", controller.deleteReward);

export default router;
