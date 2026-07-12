import { Router } from "express";
import * as controller from "../controllers/category.controller.js";
import { validate } from "../../../shared/middlewares/validate.middleware.js";
import authMiddleware from "../../../shared/middlewares/auth.middleware.js";
import { createCategorySchema, updateCategorySchema } from "../validations/category.validation.js";

const router = Router();

router.use(authMiddleware);

router.post("/", validate(createCategorySchema), controller.createCategory);
router.get("/", controller.getCategories);
router.get("/:id", controller.getCategory);
router.put("/:id", validate(updateCategorySchema), controller.updateCategory);
router.delete("/:id", controller.deleteCategory);

export default router;
