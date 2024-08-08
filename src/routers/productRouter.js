import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        message: 'Route GET /product'
    })
})

router.post('/', (req, res) => {
    res.json({
        message: 'Route POST /product'
    })
})

router.delete('/', (req, res) => {
    res.json({
        message: 'Route DELETE /product'
    })
})

router.put('/', (req, res) => {
    res.json({
        message: 'Route PUT /product'
    })
})

router.patch('/', (req, res) => {
    res.json({
        message: 'Route PATCH /product'
    })
})

export default router