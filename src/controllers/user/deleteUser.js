import { deleteById } from "../../models/userModel.js"

const deleteUser = async (req, res) => {
    const {id} = req.params

    const user = await deleteById(+id)

    if(!user){
        return res.status(404).json({
            error: "User not found"
        })
    }else{
        return res.json({
            success: "User deleted"
        })
    }
}

export default deleteUser