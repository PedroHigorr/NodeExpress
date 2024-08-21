import { getAllUsers } from "../../models/userModel.js"

const userList = async (req, res) => {

    const users = await getAllUsers()

    res.json(users)

}

export default userList