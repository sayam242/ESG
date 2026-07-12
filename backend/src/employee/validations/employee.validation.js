import { z } from "zod";

export const updateEmployeeSchema = z.object({
  firstName: z.string().min(1).optional(),
  lastName: z.string().optional(),
  email: z.string().email("Invalid email format").optional(),
  departmentId: z.string().optional(),
});
