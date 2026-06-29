

import type { Category, Prisma } from "../generated/prisma/client.js";
import { prisma } from "../lib/prisma.js";

export async function findAll(): Promise<Category[]> {
    return prisma.category.findMany();
}

export async function findById(id: any) : Promise<Category | null>{
    return prisma.category.findUnique({where: {id}}); 
}

export async function create(data: Prisma.CategoryCreateInput): Promise<Category>{
    return prisma.category.create({data});
}

export async function update(id: number, data: Prisma.CategoryUpdateInput): Promise<Category>{
    return prisma.category.update({where:{id}, data});
}

export async function remove(id: number): Promise<void>{
    await prisma.category.delete({where: {id}});
}

//TODO: Handling collections/arrays javascript  

