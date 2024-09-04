import { updateProduct } from "../../models/productModel.js"

    const editProductName = async (req, res) => {
    
    const {id} = req.params
    const {name} = req.body

    const product ={
        id: +id, name
    }

    const att = await updateProduct(product)
    
    if(!att){
        res.status(404).json({
            Error: 'Product not found'
        })
    }else{
        res.json({
            Success: 'Product name updated!'
        })
    }
}

export default editProductName