import { prisma } from '@db/index';
import { plansModule } from './index';
import { fastify } from '@main/index';

describe('Plans Module', () => {
  let app: FastifyInstance;

  beforeEach(async () => {
    app = fastify();
    await app.register(plansModule);
  });

  afterEach(async () => {
    await prisma.$disconnect();
  });

  it('should create a plan', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/plans',
      payload: {
        name: 'Basic',
        price: 10,
      },
    });
    expect(response.statusCode).toBe(201);
  });

  it('should get a plan', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/plans',
    });
    expect(response.statusCode).toBe(200);
  });

  it('should update a plan', async () => {
    const response = await app.inject({
      method: 'PUT',
      url: '/plans/1',
      payload: {
        name: 'Premium',
        price: 20,
      },
    });
    expect(response.statusCode).toBe(200);
  });

  it('should calculate prorated upgrade price', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/plans/prorated-upgrade-price',
      payload: {
        fromPlanId: 1,
        toPlanId: 2,
      },
    });
    expect(response.statusCode).toBe(200);
  });
});