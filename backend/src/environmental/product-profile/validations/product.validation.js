import { z } from "zod";

export const createProductSchema = z.object({
  productName: z.string().min(2, "Product name must be at least 2 characters"),
  sku: z.string().optional(),
  esgInfo: z.string().optional(),
});

export const updateProductSchema = createProductSchema.partial();
