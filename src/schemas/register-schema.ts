import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const registerSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 dígitos"),
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 dígitos"),
  role: z.enum(["admin", "user"]), //Opcional
});

export type RegisterFormData = z.infer<typeof registerSchema>;

export const registerResolver = zodResolver(registerSchema);
