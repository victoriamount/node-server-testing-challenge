const request = require('supertest')
const server = require('../server')
const db = require('../../data/dbConfig')

const Orange = { name: 'Orange', color: 'orange'}
const Apple = { name: 'Apple', color: 'red'}
const Lemon = { name: 'Lemon', color: 'yellow'}

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})
beforeEach(async () => {
    await db('fruits').truncate()
})
afterAll(async () => {
    await db.destroy()
})

describe('sanity checks', () => {
    it('math', () => {
        expect(2+2).toBe(4)
    })
})

describe('endpoints', () => {
    describe('[POST] /fruits', () => {
        it('Responds with 201 OK', async () => {
            const res = await request(server).post('/fruits').send(Orange)
            expect(res.status).toBe(201)
        })
        // it('Responds with new Fruit', async () => {
        //     const res = await request(server).post('/fruits').send(Lemon)
        //     expect(res.body).toMatchObject(Lemon)
        // })
    })
})