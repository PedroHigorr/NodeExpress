import { create, validateUserToCreate } from "../../models/userModel.js"

const createUser = async (req, res) => {
    const user = req.body

    console.log(user)

    const userValidated = validateUserToCreate(user)

    console.log(userValidated)

    if(userValidated?.error){
      return res.status(400).json({
        Error: "Erro ao criar usuário verifique os dados!",
        FieldErrors:  userValidated.error.flatten().fieldErrors
      })
      
    }

    const result = await create(userValidated.data)

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