import { Router } from "express";
import * as controller from "../controllers/policy.controller.js";
import { validate } from "../../../shared/middlewares/validate.middleware.js";
import authMiddleware from "../../../shared/middlewares/auth.middleware.js";
import { createPolicySchema, updatePolicySchema, acknowledgePolicySchema } from "../validations/policy.validation.js";

const router = Router();

router.use(authMiddleware);

router.post("/", validate(createPolicySchema), controller.createPolicy);
router.get("/", controller.getPolicies);
router.get("/:id", controller.getPolicy);
router.put("/:id", validate(updatePolicySchema), controller.updatePolicy);
router.delete("/:id", controller.deletePolicy);
router.post("/:id/acknowledge", validate(acknowledgePolicySchema), controller.acknowledgePolicy);

export default router;
