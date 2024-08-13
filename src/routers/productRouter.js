import express from 'express'
import productByID from '../controllers/product/productByID.js'
import registerProduct from '../controllers/product/registerProduct.js'
import deleteProduct from '../controllers/product/deleteProduct.js'
import listProduct from '../controllers/product/ListProduct.js'
import editProduct from '../controllers/product/editProduct.js'
import editProductName from '../controllers/product/editProductName.js'

const router = express.Router()

router.get('/', productByID)

router.get('/list', listProduct)

router.post('/', registerProduct)

router.delete('/', deleteProduct)

router.put('/', editProduct)

router.patch('/', editProductName)

export default router