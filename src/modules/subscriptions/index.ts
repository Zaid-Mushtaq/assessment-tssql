// src/modules/subscriptions/index.ts

import { FastifyInstance, FastifyRequest } from 'fastify';
import { createSubscription, getSubscription } from './utils';

const { createRouter } = require('@trpc/server');

const subscriptionsRouter = createRouter();

subscriptionsRouter.post('/', async (req: FastifyRequest<{ Body: { planId: string; userId: string } }>) => {
  const { planId, userId } = req.body;
  return createSubscription(planId, userId);
});

subscriptionsRouter.get('/:id', async (req: FastifyRequest<{ Params: { id: string } }>) => {
  const { id } = req.params;
  return getSubscription(id);
});

export default async function subscriptionsModule(fastify: FastifyInstance) {
  fastify.register(subscriptionsRouter);
}
