import { subscriptionsModule } from './index';
import { fastify } from '@main/index';

describe('Subscriptions Module', () => {
  let app: FastifyInstance;

  beforeEach(async () => {
    app = fastify();
    await app.register(subscriptionsModule);
  });

  afterEach(async () => {
    await prisma.$disconnect();
  });

  it('should create a subscription', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/subscriptions',
      payload: {
        planId: '1',
        userId: '1',
      },
    });
    expect(response.statusCode).toBe(201);
  });

  it('should get a subscription', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/subscriptions/1',
    });
    expect(response.statusCode).toBe(200);
  });
});