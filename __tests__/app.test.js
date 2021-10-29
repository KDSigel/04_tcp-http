const request = require('supertest');
const app = require('../lib/app');
const parseRequest = require('../lib/utils/parseRequest');

describe('app routes', () => {

  it('receive / route using GET', async() => {
    const res = await request(app).get('/');
    expect(res.text).toEqual('hi');
  });
    
  it('receive /red route using GET', async() => {
    const res = await request(app).get('/red');
    expect(res.text).toEqual('<h1>red</h1>');
  });

  it('receive /green route using GET', async() => {
    const res = await request(app).get('/green');
    expect(res.text).toEqual('<h1>green</h1>');
  });

  it('receive /blue route using GET', async() => {
    const res = await request(app).get('/blue');
    expect(res.text).toEqual('<h1>blue</h1>');
  });

  it('receive /echo route using post', async() => {
    const res = await request(app).post('/echo')
      .send('fun');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('fun');
  });

});
