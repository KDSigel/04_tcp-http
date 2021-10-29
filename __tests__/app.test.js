const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {

  it('receive / route using GET', async() => {
    const res = await request(app).get('/');
    expect(res.text).toEqual('hi');
  });
    
  it('receive /red route using GET', async() => {
    const res = await request(app).get('/red');
    expect(res.text).toEqual('hi');
  });
    

});
