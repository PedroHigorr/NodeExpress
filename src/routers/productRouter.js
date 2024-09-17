import express from 'express'
import productByID from '../controllers/product/productByID.js'
import registerProduct from '../controllers/product/registerProduct.js'
import deleteProduct from '../controllers/product/deleteProduct.js'
import listProduct from '../controllers/product/ListProduct.js'
import editProduct from '../controllers/product/editProduct.js'
import editProductName from '../controllers/product/editProductName.js'
import logger from '../middlewares/logger.js'

const router = express.Router()

router.use(logger)
router.get('/:id', productByID)

router.get('/list', listProduct)

router.post('/', registerProduct)

router.delete('/:id', deleteProduct)

router.put('/:id', editProduct)

router.patch('/:id', editProductName)

export default router