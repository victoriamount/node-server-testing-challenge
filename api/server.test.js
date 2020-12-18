const request = require('supertest')
const server = require('./server')


describe('basic server up tests', () => {
    it('sanity check', () => {
        expect(2+2).toBe(4)
    })
    it('[GET] "/" responds with 200', async () => {
        const res = await request(server).get('/')
        expect(res.status).toBe(200)
    })
    it('[GET] "/" responds with "api: up" message', async () => {
        const res = await request(server).get('/')
        expect(res.body).toHaveProperty('api', 'up')
    })
})
