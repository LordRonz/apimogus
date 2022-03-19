/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { handleRequest } from '../src/handler';
import makeServiceWorkerEnv from 'service-worker-mock';
import amoguses from '../src/data/amoguses';

declare var global: any;

describe('handle', () => {
  beforeEach(() => {
    Object.assign(global, makeServiceWorkerEnv());
    jest.resetModules();
  });

  test('handle GET', async () => {
    const result = await handleRequest(new Request('/', { method: 'GET' }));
    expect(result.status).toEqual(200);
    const text = await result.text();
    expect(amoguses).toContainEqual(text);
  });
});
