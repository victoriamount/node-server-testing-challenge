const request = require('supertest')
const server = require('./server')
const db = require('../data/dbConfig')

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
    it('server is up', () => {
        expect(2+2).toBe(4)
    })
})
