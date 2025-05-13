import { z } from "zod";

export const updateUserSchema = z.object({
  name: z
    .string()
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .max(50, "O nome não pode ter mais de 50 caracteres"),
  role: z.enum(["admin", "user"]),
  status: z.enum(["active", "inactive"]),
});

export type UpdateUserFormData = z.infer<typeof updateUserSchema>;
