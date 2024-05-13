import { FastifyInstance } from 'fastify';
import { Router } from '@trpc/router';
import { createPlan, updatePlan, getPlan, proratedUpgradePrice } from './utils';
import { plansSchema } from './schema';

const plansRouter = new Router({
  prefix: 'plans',
});

plansRouter.post('/', {
  meta: {
    auth: { role: 'admin' },
  },
  async handler(req) {
    const { name, price } = req.body;
    return createPlan(name, price);
  },
});

plansRouter.get('/', {
  async handler(req) {
    return getPlan();
  },
});

plansRouter.put('/:id', {
  meta: {
    auth: { role: 'admin' },
  },
  async handler(req) {
    const { id } = req.params;
    const { name, price } = req.body;
    return updatePlan(id, name, price);
  },
});

plansRouter.post('/prorated-upgrade-price', {
  async handler(req) {
    const { fromPlanId, toPlanId } = req.body;
    return proratedUpgradePrice(fromPlanId, toPlanId);
  },
});

export default async function plansModule(fastify: FastifyInstance) {
  fastify.register(plansRouter);
}