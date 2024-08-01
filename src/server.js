
import express from "express"

const app = express()

const port = 3000

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.get('/user', (req, res) => {
    res.json({
        nome: "Pedro",
        email: "Pedro.Higor92@gmail.com",
        religiao: "Rock",
        Sexo: "Masculino"
    })
})

app.listen(port, ()=>{
    console.log(`Servidor rodando no http://localhost:3000`)
})