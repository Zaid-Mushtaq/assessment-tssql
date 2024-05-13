import { createPlan, updatePlan, getPlan, proratedUpgradePrice } from './utils';

describe('Plans Utils', () => {
  it('should create a plan', async () => {
    const plan = await createPlan('Basic', 10);
    expect(plan.name).toBe('Basic');
    expect(plan.price).toBe(10);
  });

  it('should update a plan', async () => {
    const plan = await updatePlan(1, 'Premium', 20);
    expect(plan.name).toBe('Premium');
    expect(plan.price).toBe(20);
  });

  it('should get a plan', async () => {
    const plan = await getPlan();
    expect(plan).toBeTruthy();
  });

  it('should calculate prorated upgrade price', async () => {
    const price = await proratedUpgradePrice(1, 2);
    expect(price).toBeGreaterThan(0);
  });
});