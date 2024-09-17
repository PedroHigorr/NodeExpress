import userRouter from "./routers/userRouter.js"
import productRouter from "./routers/productRouter.js"
import express from "express"
import { ENVIRONMENT, PORT, HOST } from "./config.js"

const app = express()

app.use(logger)

app.use(express.json())

app.get('/', (req, res) => {
    res.json({message: "Api on"})
})

app.use('/user', userRouter)

app.use('/product', productRouter)



app.listen(PORT, ()=>{
    console.log(
    `Servidor rodando no ambiente ${ENVIRONMENT} EM ${ENVIRONMENT == 'production' ? HOST : HOST +':'+ PORT}`
)
})