import { create } from "../../models/userModel.js"

const createUser = async (req, res) => {
    const user = req.body

    const result = await create(user)

    if(!result){
        return res.status(500).json({
            error:"Você foi o erro da sua mãe"
        })
    }else{
        return res.json({
            success: "User created!",
            user: result
        })
    }

}
export default createUser