import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

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
