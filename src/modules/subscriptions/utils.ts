// src/modules/subscriptions/utils.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Creates a new subscription.
 * @param planId The ID of the plan.
 * @param userId The ID of the user.
 * @returns The created subscription.
 */
export async function createSubscription(planId: string, userId: string) {
  return prisma.subscriptions.create({ data: { planId, userId } });
}

/**
 * Retrieves a subscription by ID.
 * @param id The ID of the subscription.
 * @returns The retrieved subscription.
 */
export async function getSubscription(id: string) {
  return prisma.subscriptions.findFirst({ where: { id } });
}
