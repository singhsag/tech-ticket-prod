import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(3, "Name is required.").max(255),
  username: z.string().min(3, "Username is required.").max(255),
  password: z
    .string()
    .min(6, "Password must be atleast 6 chracters.")
    .max(255)
    .optional()
    .or(z.literal("")),
  role: z.enum(["ADMIN", "TECH", "USER"]),
});
