import supertest from 'supertest';
import app  from '../server/server';

const server = supertest(app);

describe('Upload Route', () => {
  test('should get a sample message from sample route', async done => {
    const res = await server.get('/api/sample');
  
    expect(res.status).toBe(200);
    expect(res.body.message).toEqual('Sample Successful');
    done();
  });
});