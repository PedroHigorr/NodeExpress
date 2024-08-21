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

export const create = () => {

}