import { z } from "zod";

export const createEmissionFactorSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  value: z.number().positive("Value must be greater than 0"),
  unit: z.string().min(1, "Unit is required"),
  description: z.string().optional(),
});

export const updateEmissionFactorSchema = createEmissionFactorSchema.partial();
