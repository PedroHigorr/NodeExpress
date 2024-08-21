//import { getAllUsers } from "../../models/userModel.js"

const userList = async (req, res) => {

    //const users = await getAllUsers()

    const users = ["pedro"]
    res.json(users)

}

export default userList