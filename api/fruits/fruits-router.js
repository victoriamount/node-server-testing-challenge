const express = require('express')
const router = express.Router()

const Fruits = require('./fruits-model')

router.get('/', (req, res) => {
    Fruits.getAll()
        .then(fruits => {
            res.status(200).json(fruits)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.post('/', (req, res) => {
    Fruits.insert(req.body)
        .then(fruit => {
            res.status(201).json(fruit)
        })
        .catch(err => {
            res.status(400).json('Nope!')
        })
})

module.exports = router