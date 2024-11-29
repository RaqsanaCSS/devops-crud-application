const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server'); 
const expect = chai.expect;
chai.use(chaiHttp);

describe('POST /', () => {
  it('should add a new user and redirect to the root', (done) => {
    let user = {
      name: 'Test User',
      age: 30
    };

    chai.request(server)
      .post('/') 
      .send(user)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.redirectTo(/\/$/); 
        done();
      });
  });
});
