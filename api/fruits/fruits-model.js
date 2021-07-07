const db = require("../../data/dbConfig")

module.exports = {
    getAll,
    insert,
    remove,
    getById
}

function getAll() {
    return db('fruits')
}

async function insert(fruit) {
    const [id] = await db('fruits').insert(fruit)
    return db('fruits').where({ id }).first()
}

function remove(id) {
    return db('fruits').where({ id }).del()
}

function getById(id) {
    return db('fruits').where({ id }).first()
}