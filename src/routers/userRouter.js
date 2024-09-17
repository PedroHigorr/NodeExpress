import express from "express"
import userList from "../controllers/user/userList.js"
import userByID from "../controllers/user/userByID.js"
import createUser from "../controllers/user/createUser.js"
import deleteUser from "../controllers/user/deleteUser.js"
import editUserName from "../controllers/user/editNameUser.js"
import editUser from "../controllers/user/editUser.js"
import logger from "../middlewares/logger.js"

const router = express.Router()


router.get('/list', userList)

router.get('/:id', userByID)

router.post('/', createUser)

router.put('/:id', editUser)

router.patch('/:id', editUserName)

router.delete('/:id', deleteUser)

export default router