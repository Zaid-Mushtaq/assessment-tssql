import { z } from 'zod';

const subscriptionsSchema = z.object({
  id: z.string(),
  planId: z.string(),
  userId: z.string(),
  status: z.enum(['active', 'inactive']),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export { subscriptionsSchema };