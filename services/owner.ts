import { AppError } from "../middlewares/global.js";
import * as ownerRepo from "../repositories/owner.js";
import type {Prisma} from "../generated/prisma/client.js";


export async function getAll() {
    return ownerRepo.findAll();
}

export async function getById(id: number){
    const owner = await ownerRepo.findById(id); 
    if(!owner) throw new AppError(404, "Owner not found"); 
    return owner;
}

export async function createOwner(data: Prisma.OwnerCreateInput){
    return ownerRepo.create(data);
}

export async function updateOwner(id:number, data: Prisma.OwnerUpdateInput){
    await getById(id);
    return ownerRepo.update(id, data);
}

export async function deleteOwner(id: number){
    await getById(id);
    return ownerRepo.remove(id);
}