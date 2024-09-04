import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const listProducts = async () => {

    const list_all_product = await prisma.product.findMany()

    return list_all_product
}

export const productById = async (id) =>{

    const list_product_by_id = await prisma.product.findUnique({
        where:{
            id
        },
        select:{
            id: true,
            name: true,
            price: true,
            store: true
        }
    })
    return list_product_by_id
}

export const registerProd = async (product) =>{

    const  register_product = await prisma.product.create({
        data: product,
        select:{
            id: true,
            name: true,
            price: true,
            store: true
        }
    })
    return register_product
}

export const updateProduct = async (product) => {

    const update_product = await prisma.product.update({
        where:{
            id: product.id
        },
        select:{
            id: true,
            name: true,
            price:true, 
            store: true
        }
    })
    return update_product
}

export const delProduct = async (product) => {

    const delete_product = await prisma.product.delete({
        where: {
            id: product.id
        }
    })
    return delete_product
}