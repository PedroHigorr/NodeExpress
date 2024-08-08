import userModel from "../../models/userModel.js"

const userList = (req, res) => {

    const users = userModel.getAll()

    res.json({
        message: "List of users: ",
        users
        })

}

export default userList