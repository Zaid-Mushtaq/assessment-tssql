import { prisma } from '@db/index';
import { plansSchema } from './schema';

const createPlan = async (name: string, price: number) => {
  return prisma.plans.create({ data: { name, price } });
};

const updatePlan = async (id: string, name: string, price: number) => {
  return prisma.plans.update({ where: { id }, data: { name, price } });
};

const getPlan = async () => {
  return prisma.plans.findFirst();
};

const proratedUpgradePrice = async (fromPlanId: string, toPlanId: string) => {
  const fromPlan = await prisma.plans.findFirst({ where: { id: fromPlanId } });
  const toPlan = await prisma.plans.findFirst({ where: { id: toPlanId } });
  const priceDifference = toPlan.price - fromPlan.price;
  const daysRemaining = 30 - new Date().getDate(); // assuming 30-day month
  return (priceDifference / 30) * daysRemaining;
};

export { createPlan, updatePlan, getPlan, proratedUpgradePrice };