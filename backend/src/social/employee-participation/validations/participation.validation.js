import { z } from "zod";

export const submitProofSchema = z.object({
  proofUrl: z.string().min(1, "Proof URL is required"),
});

export const approveParticipationSchema = z.object({
  points: z.number().int().min(0).optional(),
});

export const filterParticipationSchema = z.object({
  status: z.enum(["PENDING", "APPROVED", "REJECTED"]).optional(),
  employeeId: z.string().optional(),
  activityId: z.string().optional(),
});
