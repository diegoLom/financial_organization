import type { Owner, Prisma } from "../generated/prisma/client.js";
import { prisma } from "../lib/prisma.js";

export async function findAll(): Promise<Owner[]> {
  return prisma.owner.findMany();
}

export async function findById(id: number): Promise<Owner | null> {
  return prisma.owner.findUnique({ where: { id } });
}

export async function create(data: Prisma.OwnerCreateInput): Promise<Owner> {
  return prisma.owner.create({ data });
}

export async function update(id: number, data: Prisma.OwnerUpdateInput): Promise<Owner> {
  return prisma.owner.update({ where: { id }, data });
}

export async function remove(id: number): Promise<void> {
  await prisma.owner.delete({ where: { id } });
}
