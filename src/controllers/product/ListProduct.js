// import { listProducts } from "../../models/productModel.js"

const ProductsList = async (req, res) => {
    
    // const products = await listProducts()
    const products = ["teste"]
    res.json(products)      
    
  
}

export default ProductsList