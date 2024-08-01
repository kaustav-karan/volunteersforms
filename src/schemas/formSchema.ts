// schemas/formSchema.ts
import { z } from "zod";

const teamSchema = z.object({
  teamName: z.string().nonempty(),
  exp: z.string().nonempty(),
  detailedExperience: z.string().nonempty(),
});

const qnaSchema = z.object({
  question: z.string().nonempty(),
  answer: z.string().nonempty(),
});

export const formSchema = z.object({
  name: z.string().nonempty(),
  emailId: z.string().email(),
  whatsappId: z.string().nonempty(),
  teams: z.array(teamSchema),
  qNa: z.array(qnaSchema),
});

export type FormSchema = z.infer<typeof formSchema>;
