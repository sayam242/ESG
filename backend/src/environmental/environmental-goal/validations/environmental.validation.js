import { z } from "zod";

export const createGoalSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  description: z.string().optional(),
  department: z.string().min(2, "Department is required"),
  targetCO2: z.number().positive("Target CO₂ must be greater than 0"),
  currentCO2: z.number().min(0, "Current CO₂ cannot be negative"),
  progress: z.number().min(0).max(100).default(0),
  deadline: z.coerce.date(),
  status: z.enum(["ACTIVE", "ON_TRACK", "COMPLETED", "OVERDUE"]),
});

export const updateGoalSchema = createGoalSchema.partial();
