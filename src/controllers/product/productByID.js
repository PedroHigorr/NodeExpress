import { productById } from "../../models/productModel.js"

const productByID = async (req, res) => {
  
    const {id} = req.params

    const product = await productById(+id)

    if(!product){
        res.status(404).json({
            Error: 'Product not found'
        })
    }else{
        res.json({
            Success: 'Showing product: '
        })
    }
}

export default productByID