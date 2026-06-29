import type {Card, Prisma} from "../generated/prisma/client.js";
import {prisma} from "../lib/prisma.js";


export async function findAll(): Promise<Card[]>{
    return prisma.card.findMany();
}

export async function findById(id: number): Promise<Card | null>{
    return prisma.card.findUnique({where: {id}});
}

export async function create(data: Prisma.CardCreateInput): Promise<Card> {
    return prisma.card.create({data});
}

export async function update(id: number, data: Prisma.CardUpdateInput): Promise<Card>{
    return prisma.card.update({where: {id}, data});
}

export async function remove(id: number): Promise<void>{
   await prisma.card.delete({where: {id}});
}