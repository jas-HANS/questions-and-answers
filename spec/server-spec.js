const mongoose = require('mongoose');
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../server/server.js');

chai.use(chaiHttp);

describe('Fetching data', () => {
    let dbConnection;

    beforeEach((done) => {
        const mongoDB = 'mongodb://127.0.0.1/qaDatabase';
        mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
        done();
    });

    afterEach(() => {
        mongoose.connection.close();
    });

    it('Should get all question data for a single product', (done) => {
        chai.request(app)
          .get('/qa/5f8b37a24cdb94ac89e32813')
          .then((res) => {
              expect(res).to.have.status(200);
              expect(res).to.be.json;
          })
          .catch((err) => {
              throw err;
          })
          .then(done,done);
    })
});

describe('Posting data', () => {
    let dbConnection;

    beforeEach((done) => {
        const mongoDB = 'mongodb://127.0.0.1/qaDatabase';
        mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
        done();
    });

    afterEach(() => {
        mongoose.connection.close();
    });

    it('Should add a question to the databse', (done) => {
        chai.request(app)
          .post('/qa/5f8b37a24cdb94ac89e32813')
          .send({
            '_method': 'post',
            'name': 'Kyle',
            'body': 'What is my mind?',
            'email': 'kyle@boogie.woogie'
          })
          .then((res) => {
              expect(res).to.have.status(201);
              expect(res).to.be.json;
          })
          .catch((err) => {
              throw err;
          })
          .then(done,done);
    })
});
