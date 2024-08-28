import { updateUser } from "../../models/userModel.js"

const editUser =  async (req, res) => {
    
    const {id} = req.params
    const user = req.body
    user.id = +id

    const result = await updateUser(user)

    if(!result){
        return res.status(500).json({
            error:"Update error"
        })
    }else{
        return res.json({
            success: "User updated!",
            user: result
        })
    }
}

export default editUser