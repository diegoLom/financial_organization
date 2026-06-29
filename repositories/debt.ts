import type { Debt, Prisma } from "../generated/prisma/client.js";
import { prisma } from "../lib/prisma.js";

export async function findAll(): Promise<Debt[]> {
  return prisma.debt.findMany({
    include: {
      card: true,
      category: true,
      debtOwners: { include: { owner: true } },
    },
  });
}

export async function findById(id: number): Promise<Debt | null> {
  return prisma.debt.findUnique({
    where: { id },
    include: {
      card: true,
      category: true,
      debtOwners: { include: { owner: true } },
    },
  });
}

export async function create(data: Prisma.DebtCreateInput): Promise<Debt> {
  return prisma.debt.create({ data });
}

export async function update(id: number, data: Prisma.DebtUpdateInput): Promise<Debt> {
  return prisma.debt.update({ where: { id }, data });
}

export async function remove(id: number): Promise<void> {
  await prisma.debt.delete({ where: { id } });
}
