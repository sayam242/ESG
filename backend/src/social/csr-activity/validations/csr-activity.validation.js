import { z } from "zod";

export const createCSRActivitySchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().optional(),
  categoryId: z.string().optional(),
  evidenceRequired: z.boolean().default(false),
});

export const updateCSRActivitySchema = createCSRActivitySchema.partial();

export const joinCSRActivitySchema = z.object({
  employeeId: z.string().min(1, "Employee ID is required"),
});
