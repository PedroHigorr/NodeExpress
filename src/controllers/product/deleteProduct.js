import { delProduct } from "../../models/productModel.js"

const deleteProduct = async (req, res) => {

    const {id} = req.params

    const product = await delProduct(+id)

    if(!product){
        res.status(404).json({
            Error: 'User not found'
        })
    }else{
        res.json({
            Success: 'User deleted!'
        })
    }

}

export default deleteProduct