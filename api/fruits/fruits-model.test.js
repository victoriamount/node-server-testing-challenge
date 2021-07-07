const Fruits = require('./fruits-model')
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

describe('Fruits model', () => {
    it('Fruits.getAll returns empty array if no fruits', async () => {
        const result = await Fruits.getAll()
        expect(result).toHaveLength(0)
    })
    it('Fruits.getAll returns fruits', async () => {
        await db('fruits').insert(Lemon)
        const result = await Fruits.getAll()
        expect(result).toHaveLength(1)
    })    
    it('Fruits.insert returns the new fruit', async () => {
        const result = await Fruits.insert(Lemon)
        expect(result.name).not.toBe('Lime')
        expect(result.name).toBe('Lemon')
        expect(result).not.toMatchObject(Apple)
        expect(result).toMatchObject(Lemon)
    })
    it('Fruits.remove removes given fruit', async () => {
        await db('fruits').insert(Orange)
        const result = await Fruits.remove(1)
        expect(result).toBe(1)
    })
})