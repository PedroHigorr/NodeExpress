import userRouter from "./routers/userRouter.js"
import productRouter from "./routers/productRouter.js"
import express from "express"

const app = express()
const port = 3000

app.use('/user', userRouter)

app.use('/product', productRouter)

app.listen(port, ()=>{
    console.log(`Server listening on: http://localhost:3000`)
})