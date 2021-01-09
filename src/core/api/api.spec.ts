import chai from 'chai'
import chaiHttp = require('chai-http')
import { API_BASE_PATH } from './api'

chai.use(chaiHttp)

const agent = chai.request.agent(API_BASE_PATH).keepOpen()

const { expect } = chai

function logout() {
    agent.get('/auth/logout')
}

logout()

describe('Api usage suite', () => {
    it('It should signin', (done) => {
        agent
            .post('/auth/signin')
            .send({ login: 'test3', password: 'test3' })
            .end((_, res) => {
                expect(res).to.have.cookie('authCookie')
                expect(res).to.have.status(200)
                done()
            })
    })

    it('It should get all chats, after signin', (done) => {
        agent
            .get('/chats')
            .end((_, res) => {
                expect(res).to.have.status(200)
                expect(res.body).to.be.an('array')
                done()
            })
    })

    it('User profile should be update, after signin', (done) => {
        agent
            .put('/user/profile')
            .send({
                first_name: 'test3',
                second_name: String(Date.now()),
                display_name: 'ZumerEpt',
                login: 'test3',
                email: 'test3@test3.ru',
                phone: '333333333',
            })
            .end((_, res) => {
                expect(res).to.have.status(200)
                expect(res.body).to.have.property('id')
                done()
            })
    })

    it('It should be an 404 error, if API address not valid', (done) => {
        agent
            .get('/chats-not-valid')
            .then((res) => {
                expect(res).not.have.status(200)

                throw res
            })
            .catch((err) => {
                expect(err).to.have.status(404)
                done()
            })
    })

    it('It should be an 400 error, if API request not valid', (done) => {
        agent
            .post('/chats')
            .send({ titleNotValid: '' })
            .then((res) => {
                expect(res).to.not.have.status(200)

                throw res
            })
            .catch((err) => {
                expect(err).not.have.status(200)
                done()
            })
    })
})

agent.close(logout)
