import { Router } from "express";
import * as controller from "../controllers/participation.controller.js";
import { validate } from "../../../shared/middlewares/validate.middleware.js";
import authMiddleware from "../../../shared/middlewares/auth.middleware.js";
import { submitProofSchema, approveParticipationSchema } from "../validations/participation.validation.js";

const router = Router();

router.use(authMiddleware);

router.get("/queue", controller.getAllParticipations);
router.get("/", controller.getAllParticipations);
router.get("/:id", controller.getParticipation);
router.put("/:id/submit-proof", validate(submitProofSchema), controller.submitProof);
router.put("/:id/approve", validate(approveParticipationSchema), controller.approveParticipation);
router.put("/:id/reject", controller.rejectParticipation);
router.delete("/:id", controller.deleteParticipation);

export default router;
