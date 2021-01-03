import chai from 'chai'
import * as request from 'superagent'
import { API_BASE_PATH } from './Api.js'
// @ts-ignore
import chaiHttp from 'chai-http'

chai.use(chaiHttp)

const agent = chai.request.agent(API_BASE_PATH)

const { expect } = chai

describe("Api usage suite", () => {
    it("It should get all chats, after signin", () => {
        agent
            .post('/auth/signin')
            .send({ login: 'SanchoPansoYo', password: 'SanchoPansoYo123' })
            .then(function (res: request.Response) {
                // @ts-ignore
                expect(res).to.have.cookie('authCookie')

                return agent
                    .get('/chats')
                    .then(function (res: request.Response) {
                        // @ts-ignore
                        expect(res).to.have.status(200)
                        expect(res).to.be.an('array')
                        agent.close()
                    })
            })
    })

    it("List of chats should be update, after signin", () => {
        agent
            .post('/auth/signin')
            .send({ login: 'SanchoPansoYo', password: 'SanchoPansoYo123' })
            .then(function (res: request.Response) {
                // @ts-ignore
                expect(res).to.have.cookie('authCookie')

                return agent
                    .post('/chats')
                    .send({ title: String(Date.now()) })
                    .then(function (res: request.Response) {
                        // @ts-ignore
                        expect(res).to.have.status(200)
                        expect(res).to.not.have.property('id')
                        agent.close()
                    })
            })
    })
})

