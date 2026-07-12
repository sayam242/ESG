import { Router } from "express";
import * as controller from "../controllers/product.controller.js";
import { validate } from "../../../shared/middlewares/validate.middleware.js";
import authMiddleware from "../../../shared/middlewares/auth.middleware.js";
import { createProductSchema, updateProductSchema } from "../validations/product.validation.js";

const router = Router();

router.use(authMiddleware);

router.post("/", validate(createProductSchema), controller.createProduct);
router.get("/", controller.getProducts);
router.get("/:id", controller.getProduct);
router.put("/:id", validate(updateProductSchema), controller.updateProduct);
router.delete("/:id", controller.deleteProduct);

export default router;
