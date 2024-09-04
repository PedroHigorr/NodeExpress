import { registerProd } from "../../models/productModel.js"

const registerProduct = async (req, res) => {

    const product = req.body

    const cad = await registerProd (product)

    if(!cad){
        res.status(500).json({
            Error:'Failed to register product'
        })
    }else{
        res.json({
            Success: 'Product registered with Success'
        })
    }

}

export default registerProduct