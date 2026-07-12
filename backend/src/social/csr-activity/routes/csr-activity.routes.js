import { Router } from "express";
import * as controller from "../controllers/csr-activity.controller.js";
import { validate } from "../../../shared/middlewares/validate.middleware.js";
import authMiddleware from "../../../shared/middlewares/auth.middleware.js";
import { createCSRActivitySchema, updateCSRActivitySchema, joinCSRActivitySchema } from "../validations/csr-activity.validation.js";

const router = Router();

router.use(authMiddleware);

router.post("/", validate(createCSRActivitySchema), controller.createActivity);
router.get("/", controller.getActivities);
router.get("/:id", controller.getActivity);
router.put("/:id", validate(updateCSRActivitySchema), controller.updateActivity);
router.delete("/:id", controller.deleteActivity);
router.post("/:id/join", validate(joinCSRActivitySchema), controller.joinActivity);
router.get("/:id/participants", controller.getParticipants);

export default router;
