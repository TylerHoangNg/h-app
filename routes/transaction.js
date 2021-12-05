const { Router } = require('express')
const Transaction = require('../models/Transaction')

const router = Router()

router.get('/', async(req, res) => {

})

router.post('/', async(req, res) => {
    const { value, date } = req.body
    const newTransaction = new Transaction({ value, date })

    
})

router.delete('/:id', async(req, res) => {
    
})

module.exports = router