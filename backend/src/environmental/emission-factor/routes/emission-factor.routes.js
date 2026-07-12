import { Router } from "express";
import * as controller from "../controllers/emission-factor.controller.js";
import { validate } from "../../../shared/middlewares/validate.middleware.js";
import authMiddleware from "../../../shared/middlewares/auth.middleware.js";
import { createEmissionFactorSchema, updateEmissionFactorSchema } from "../validations/emission-factor.validation.js";

const router = Router();

router.use(authMiddleware);

router.post("/", validate(createEmissionFactorSchema), controller.createEmissionFactor);
router.get("/", controller.getEmissionFactors);
router.get("/:id", controller.getEmissionFactor);
router.put("/:id", validate(updateEmissionFactorSchema), controller.updateEmissionFactor);
router.delete("/:id", controller.deleteEmissionFactor);

export default router;
