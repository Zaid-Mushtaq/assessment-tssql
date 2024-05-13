import { z } from 'zod';

const plansSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  defaultUsers: z.number().optional(),
  pricePerUser: z.number().optional(),
});

export { plansSchema };