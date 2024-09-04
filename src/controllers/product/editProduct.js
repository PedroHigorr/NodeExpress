import { updateProduct } from "../../models/productModel.js"

const editProduct = async (req,res) => {

    const {id} = req.params
    const product = req.body
    product.id = id

    const del = await updateProduct(product)

    if(!product){
        res.status(404).json({
            Error: 'Product not found'
        })
    }else{
        res.json({
            Success: 'Product updated!'
        })
    }
}

export default editProduct