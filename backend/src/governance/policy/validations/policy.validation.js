import { z } from "zod";

export const createPolicySchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().optional(),
  version: z.string().optional(),
});

export const updatePolicySchema = createPolicySchema.partial();

export const acknowledgePolicySchema = z.object({
  employeeId: z.string().min(1, "Employee ID is required"),
});
