import { updateUser } from "../../models/userModel.js"

const editUserName = async (req, res) => {
    const {id} = req.params
    const {name} = req.body

    const user = {
       id: +id, name
    }

    const result = await updateUser(user)

    if(!result){
        return res.status(500).json({
            error:"Update user name error"
        })
    }else{
        return res.json({
            success: "User name updated!",
            user: result
        })
    }
}

export default editUserName