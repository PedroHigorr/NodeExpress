import { getById } from "../../models/userModel.js"

const userByID = async (req, res) => {
 
 const {id} = req.params

 const user = await getById(+id)

 if(user){
    return res.json({
        message: "User get by id",
        user: user
    })
 }else{
    return res.status(404).json({
        erro: "Usuário não encontrado"
    })
 }
 
}

export default userByID