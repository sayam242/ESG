import { z } from "zod";

export const createRewardSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().optional(),
  pointsRequired: z.number().int().positive("Points required must be greater than 0"),
  stock: z.number().int().min(0, "Stock cannot be negative"),
  status: z.enum(["ACTIVE", "INACTIVE"]).default("ACTIVE"),
});

export const updateRewardSchema = createRewardSchema.partial();
