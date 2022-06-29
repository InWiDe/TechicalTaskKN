/* eslint-disable no-undef */
/* eslint-disable n/handle-callback-err */
import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../app.js'
const expect = chai.expect

chai.use(chaiHttp)

describe('GET /data/:from/:to filtered data', () => {
  it('it should GET quantity of data grouped by year within specific timespan', (done) => {
    const from = '10-01-2021'
    const to = '12-02-2022'
    chai.request(app)
      .get('/data/' + from + '/' + to)
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.body).be.a('array')
        for (const key in res.body) {
          expect(res.body[key]).have.property('year')
          expect(res.body[key]).have.property('quantity')
        }
        done()
      })
  })
  it('it should throw an error (400) due to the format mismatch of from path parameter', (done) => {
    const from = '16-23-2021'
    const to = '12-02-2022'
    chai.request(app)
      .get('/data/' + from + '/' + to)
      .end((err, res) => {
        expect(res).to.have.status(400)
        done()
      })
  })

  it('it should return no data found (404) within specific timespan', (done) => {
    const from = '12-23-1932'
    const to = '12-26-1933'
    chai.request(app)
      .get('/data/' + from + '/' + to)
      .end((err, res) => {
        expect(res).to.have.status(404)
        done()
      })
  })
})
