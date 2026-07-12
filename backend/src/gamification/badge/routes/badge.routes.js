import { Router } from "express";
import * as controller from "../controllers/badge.controller.js";
import { validate } from "../../../shared/middlewares/validate.middleware.js";
import authMiddleware from "../../../shared/middlewares/auth.middleware.js";
import { createBadgeSchema, updateBadgeSchema } from "../validations/badge.validation.js";

const router = Router();

router.use(authMiddleware);

router.post("/", validate(createBadgeSchema), controller.createBadge);
router.get("/", controller.getBadges);
router.get("/:id", controller.getBadge);
router.put("/:id", validate(updateBadgeSchema), controller.updateBadge);
router.delete("/:id", controller.deleteBadge);

export default router;
