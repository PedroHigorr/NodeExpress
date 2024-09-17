import {PrismaClient} from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

const userSchema = z.object({
    id: z.number({message: "O ID deve ser um número inteiro"})
        .positive({message: "O ID deve ser um número positivo"}),
    name: z.string({
        required_error: "O nome é um campo obrigatório",
        invalid_type_error: "O nome deve ser uma String"})
        .min(3)
        .max(99),
    email: z.string()
        .email()
        .max(200),
    pass: z.string({
        required_error: "A senha é um campo obrigatório",
        invalid_type_error: "A senha deve ser uma String"})
        .min(6)
        .max(256)

})

export const validateUserToCreate = (user) => {

    const partialUserSchema = userSchema.partial({
        id: true
    })
   
    return partialUserSchema.safeParse(user)

} 

export const getAllUsers = async () => {

    const allUser = await prisma.user.findMany({
       select: { 
        id: true,
        name: true,
        email: true
        }
    })

    return allUser
}

export const getById = async (id) =>{
    const  byId = await prisma.user.findUnique({
        where:{
            id
        },
        select:{
            id: true,
            name: true,
            email: true
        }
    })
    return byId
}

export const create = async (user) => {
    const  result = await prisma.user.create({
        data: user,
        select:{
            id: true,
            name: true,
            email: true
        }
    })
    return result;
}

export const deleteById = async (id) =>{
    const  deleted = await prisma.user.delete({
        where:{
            id
        }
    })
    return deleted
}

export const updateUser = async (user) =>{
    const  updatedUser = await prisma.user.update({
        where:{
            id: user.id
        },
        data: user,
        select:{
            id: true,
            name: true,
            email: true
        }
    })
    return updatedUser
}
