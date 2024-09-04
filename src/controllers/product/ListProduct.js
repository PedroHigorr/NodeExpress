import { listProducts } from "../../models/productModel.js"

const ProductsList = async (req, res) => {
    
    const products = await listProducts()
    
    if(!products){
        res.status(404).json({
            Error: 'Products not found to be listed'
        })
    }else{
        res.json({
            Success: 'Listing products..'
        })
    }
}

export default ProductsList