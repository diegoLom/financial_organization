import type { DebtOwner, Prisma } from "../generated/prisma/client.js";
import { prisma } from "../lib/prisma.js";

export async function findByDebt(debtId: number): Promise<DebtOwner[]> {
  return prisma.debtOwner.findMany({
    where: { debtId },
    include: { owner: true },
  });
}

export async function findById(id: number): Promise<DebtOwner | null> {
  return prisma.debtOwner.findUnique({
    where: { id },
    include: { owner: true, debt: true },
  });
}

export async function create(data: Prisma.DebtOwnerCreateInput): Promise<DebtOwner> {
  return prisma.debtOwner.create({ data });
}

export async function update(id: number, data: Prisma.DebtOwnerUpdateInput): Promise<DebtOwner> {
  return prisma.debtOwner.update({ where: { id }, data });
}

export async function remove(id: number): Promise<void> {
  await prisma.debtOwner.delete({ where: { id } });
}

export async function removeByDebt(debtId: number): Promise<void> {
  await prisma.debtOwner.deleteMany({ where: { debtId } });
}
