const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const expect = chai.expect;
const server = require('../server');  // Import server

chai.use(chaiHttp);

describe('User Routes', function() {
  after(function() {
    server.close();  // Close the server after tests
  });

  it('should get all users on / GET', function(done) {
    chai.request(app)
      .get('/')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(res).to.be.html;
        done();
      });
  });
});
