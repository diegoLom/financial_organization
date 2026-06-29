import { AppError } from "../middlewares/global.js";
import * as categoryRepo from "../repositories/category.js";
import type {Prisma} from "../generated/prisma/client.js";

export async function getAll() {
    return categoryRepo.findAll();
}

export async function getById(id: number){
    const category = await categoryRepo.findById(id);
    if(!category) throw new AppError(404, "Category not found"); 
    return category;
}

export async function createCategory(data: Prisma.CategoryCreateInput) {
    return categoryRepo.create(data); 
}

export async function updateCategory(id:number, data: Prisma.CategoryUpdateInput){
    await getById(id);
    return categoryRepo.update(id, data);
}

export async function deleteCategory(id:number){
    await getById(id);
    return categoryRepo.remove(id);
}