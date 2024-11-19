import { z } from "zod";

export const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(5),
  email: z.string().email(),
});

export const crudSchema = userSchema.extend({
  id: userSchema.shape.id.optional()
});
