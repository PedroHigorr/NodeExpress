import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const listProducts = async () => {

    const allProduct = await prisma.product.findMany()

    return allProduct
}