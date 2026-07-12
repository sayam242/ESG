import { z } from "zod";

export const createCategorySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  type: z.string().optional(),
  activity: z.string().optional(),
  status: z.boolean().default(true),
});

export const updateCategorySchema = createCategorySchema.partial();
