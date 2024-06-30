const request = require('supertest');
const models = require('../../models');
const app = require('../../../index');

afterAll(async () => {
  await models.sequelize.close();
});

describe('Get all users', () => {
  it('Should return array of users.', async () => {
    let res = await request(app).get('/user');
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(0);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});