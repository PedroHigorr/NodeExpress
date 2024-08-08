import express from "express"

const router = express.Router()

router.get('/', (req, res) =>{
    res.json({message: 'Rota GET /user'})
})


router.post('/', (req, res) =>{
    res.json({message: 'Rota post /user'})
})


router.put('/', (req, res) =>{
    res.json({message: 'Rota put /user'})
})


router.patch('/', (req, res) =>{
    res.json({message: 'Rota path /user'})
})


router.delete('/', (req, res) =>{
    res.json({message: 'Rota delete /user'})
})

export default router